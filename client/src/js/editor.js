// Import methods to save and get data from the indexedDB database in './database.js'
import { getDb, putDb } from './database';
import { header } from './header';

export default class {
  constructor() {
    const localData = localStorage.getItem('content');

    // check if CodeMirror is loaded
    if (typeof CodeMirror === 'undefined') {
      throw new Error('CodeMirror is not loaded');
    }

    this.editor = CodeMirror(document.querySelector('#main'), {
      value: '',
      mode: 'javascript',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    // When the editor is ready, set the value to whatever is stored in indexeddb.
    // Fall back to localStorage if nothing is stored in indexeddb, and if neither is available, set the value to header.
    getDb().then((data) => {
      console.info('Loaded data from IndexedDB, injecting into editor');
      console.info("data - ***" + JSON.stringify(data) + "*** length: " + data.length);
      console.info("localData - ***" + localData + "***");
      
      //this.editor.setValue(data || localData || header);
      this.editor.setValue(localData || header);
      
      // if (jData.length && jData.length > 2) {
      //   let dta = JSON.parse(jData);
      //   console.info("dta - ***" + dta + "*** length: " + dta.length);
      //   this.editor.setValue(dta);
      // } else if (localData != null) {
      //   console.info("localData - ***" + localData + "***");
      //   this.editor.setValue(localData);
      // } else {
      //   console.info("header - " + header);
      //   this.editor.setValue(header);
      // }
    });

    this.editor.on('change', () => {
      localStorage.setItem('content', this.editor.getValue());
    });

    // Save the content of the editor when the editor itself looses focus.
    this.editor.on('blur', () => {
      
      //JSHINT(this.editor.getValue);
      
      console.log('The editor has lost focus');
      const content = localStorage.getItem('content');
      let id = content.split(/\r\n?\n/).length;
      putDb(id, content);
      
      // const errors = Array.isArray(JSHINT.errors) ? JSHINT.errors : [];
      // this.editor.clearGutter('error');
      // for (const error of errors) {
      //   this._editor.setGutterMarker(error.line - 1, 'error', makeMarker(error.reason));
      // }

    });

    // Create an HTML element that CodeMirror is responsible for positioning
    // properly.
    function makeMarker(msg) {
      const marker = document.createElement('div');
      marker.classList.add('error-marker');
      marker.innerHTML = '&nbsp;';

      const error = document.createElement('div');
      error.innerHTML = msg;
      error.classList.add('error-message');
      marker.appendChild(error);

      return marker;
    }
  }
}
