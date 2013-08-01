(function(listener) {
  listener.providesCommand = 'mdn';

  listener.matcher = function(message, envelope) {
    return (envelope.type == 'channel') &&
           this.Util.matchesCommand('mdn', message);
  }

  listener.callback = function(message, envelope) {
    var args = this.Util.extractParams(message, 'mdn');

    this.reply(envelope, mdn.apply(this, args));
  }

  function mdn(param) {
    return 'https://developer.mozilla.org/en-US/search?q=' + encodeURIComponent(param) + '&sitesearch=developer.mozilla.org';
  }
})(exports);
