(function () {
    'use strict';

    var DATA_KEY = 'brewtracker.3.entries';
    var LIMIT_KEY = 'brewtracker.3.limit';
    var THEME_KEY = 'brewtracker.3.theme';
    var BACKUP_VERSION = 1;

    function byId(id) {
        return document.getElementById(id);
    }

    function showMessage(text, isError) {
        var message = byId('backupMessage');
        if (!message) return;
        message.textContent = text;
        message.className = isError ? 'backup-message error' : 'backup-message success';
    }

    function readEntries() {
        var raw = localStorage.getItem(DATA_KEY);
        if (!raw) return [];
        var entries = JSON.parse(raw);
        if (!Array.isArray(entries)) throw new Error('Stored entries are invalid.');
        return entries;
    }

    function createBackup() {
        try {
            var backup = {
                app: 'BrewTracker',
                backupVersion: BACKUP_VERSION,
                createdAt: new Date().toISOString(),
                data: {
                    entries: readEntries(),
                    dailyLimit: localStorage.getItem(LIMIT_KEY) || '4',
                    theme: localStorage.getItem(THEME_KEY) || 'light'
                }
            };

            var blob = new Blob([JSON.stringify(backup, null, 2)], {
                type: 'application/json;charset=utf-8'
            });
            var url = URL.createObjectURL(blob);
            var link = document.createElement('a');
            var date = new Date();
            var stamp = date.getFullYear() + '-' +
                String(date.getMonth() + 1).padStart(2, '0') + '-' +
                String(date.getDate()).padStart(2, '0');

            link.href = url;
            link.download = 'brewtracker-backup-' + stamp + '.json';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
            showMessage('Backup created successfully.', false);
        } catch (error) {
            showMessage('Backup failed: ' + error.message, true);
        }
    }

    function validateBackup(backup) {
        if (!backup || backup.app !== 'BrewTracker') {
            throw new Error('This is not a BrewTracker backup.');
        }
        if (!backup.data || !Array.isArray(backup.data.entries)) {
            throw new Error('The backup does not contain valid entries.');
        }
        return backup;
    }

    function restoreBackup(file) {
        var reader = new FileReader();

        reader.onload = function () {
            try {
                var backup = validateBackup(JSON.parse(reader.result));
                var count = backup.data.entries.length;
                var question = 'Restore ' + count + ' coffee entr' +
                    (count === 1 ? 'y' : 'ies') +
                    '? Current BrewTracker data will be replaced.';

                if (!window.confirm(question)) {
                    showMessage('Restore cancelled.', false);
                    return;
                }

                localStorage.setItem(DATA_KEY, JSON.stringify(backup.data.entries));
                localStorage.setItem(LIMIT_KEY, String(backup.data.dailyLimit || '4'));
                localStorage.setItem(THEME_KEY, backup.data.theme === 'dark' ? 'dark' : 'light');
                showMessage('Backup restored. BrewTracker will reload.', false);
                window.setTimeout(function () { window.location.reload(); }, 700);
            } catch (error) {
                showMessage('Restore failed: ' + error.message, true);
            }
        };

        reader.onerror = function () {
            showMessage('The selected backup file could not be read.', true);
        };

        reader.readAsText(file);
    }

    function buildInterface() {
        var aside = document.querySelector('aside.panel');
        if (!aside || byId('backupRestorePanel')) return;

        var section = document.createElement('section');
        section.id = 'backupRestorePanel';
        section.className = 'backup-restore';
        section.innerHTML =
            '<h2>Backup &amp; Restore</h2>' +
            '<div class="backup-actions">' +
                '<button class="btn secondary" id="createBackup" type="button">Download backup</button>' +
                '<button class="btn secondary" id="selectBackup" type="button">Restore backup</button>' +
                '<input id="backupFile" type="file" accept="application/json,.json" hidden>' +
            '</div>' +
            '<p class="backup-hint">Backups include coffee entries, daily limit and theme.</p>' +
            '<p id="backupMessage" class="backup-message" role="status" aria-live="polite"></p>';

        var details = aside.querySelector('.details');
        if (details) aside.insertBefore(section, details);
        else aside.appendChild(section);

        byId('createBackup').onclick = createBackup;
        byId('selectBackup').onclick = function () { byId('backupFile').click(); };
        byId('backupFile').onchange = function () {
            if (this.files && this.files[0]) restoreBackup(this.files[0]);
            this.value = '';
        };
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildInterface);
    } else {
        buildInterface();
    }
}());
