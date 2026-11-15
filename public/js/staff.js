var socket = io();
var tokenDisplay = document.getElementById('token-display');
var currentToken = document.getElementById('current-token');
var nextToken = document.getElementById('next-token');
var deskBoard = document.getElementById('desk-board');
var getTokenButton = document.getElementById('get-token-btn');

var renderDeskBoard = function(state) {
    var desks = state && state.desks ? state.desks : {};
    var rows = [];

    Object.keys(desks).forEach(function(key) {
        rows.push('<div class="desk-row"><span>Desk ' + key + '</span><strong>' + desks[key] + '</strong></div>');
    });

    if (rows.length === 0) {
        rows.push('<div class="desk-row empty"><span>Desk status</span><strong>Waiting</strong></div>');
    }

    deskBoard.innerHTML = rows.join('');
};

var renderState = function(state) {
    if (!state) {
        return;
    }

    if (state.lastGivenToken && state.lastGivenToken !== 0) {
        currentToken.textContent = state.lastGivenToken;
    } else {
        currentToken.textContent = '--';
    }

    if (state.lastCalledToken && state.lastCalledToken !== 0) {
        nextToken.textContent = state.lastCalledToken;
    } else {
        nextToken.textContent = '--';
    }

    renderDeskBoard(state);
};

socket.on('state', function(state) {
    renderState(state);
});

socket.on('desks', function(state) {
    renderState(state);
});

socket.on('token', function(state) {
    renderState(state);
    if (state && state.lastGivenToken) {
        tokenDisplay.textContent = state.lastGivenToken;
    }
});

getTokenButton.addEventListener('click', function() {
    fetch('/api/token')
      .then(function(response) {
          return response.json();
      })
      .then(function(state) {
          if (state && state.lastGivenToken) {
              tokenDisplay.textContent = state.lastGivenToken;
              renderState(state);
          }
      })
      .catch(function(err) {
          console.error('Unable to issue token', err);
      });
});

renderDeskBoard({ desks: {} });
