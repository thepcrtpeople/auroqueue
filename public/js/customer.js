<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Staff Menu</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="/favicon.png">
    <link rel="stylesheet" href="/css/style.css">
</head>
<body class="staff-body">
    <div class="staff-shell">
        <header class="staff-header">
            <div>
                <p class="eyebrow">Operations</p>
                <h1>Staff Menu</h1>
            </div>
            <div class="staff-actions">
                <button id="new-token-btn" class="action-button secondary">Issue Token</button>
            </div>
        </header>

        <div class="summary-grid">
            <div class="summary-card">
                <span>Last issued</span>
                <strong id="last-issued">0</strong>
            </div>
            <div class="summary-card">
                <span>Last called</span>
                <strong id="last-called">0</strong>
            </div>
        </div>

        <div class="desk-grid" id="desk-grid">
            <button class="desk-button" data-desk="1"><span>Desk 1</span><strong id="desk-1-value">--</strong></button>
            <button class="desk-button" data-desk="2"><span>Desk 2</span><strong id="desk-2-value">--</strong></button>
            <button class="desk-button" data-desk="3"><span>Desk 3</span><strong id="desk-3-value">--</strong></button>
            <button class="desk-button" data-desk="4"><span>Desk 4</span><strong id="desk-4-value">--</strong></button>
        </div>
    </div>

    <script src="/js/socket.io-1.3.7.js"></script>
    <script src="/js/staff.js"></script>
</body>
</html>
