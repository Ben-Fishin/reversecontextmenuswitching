/* bender-tags: editor */
/* bender-ckeditor-plugins: wysiwygarea, toolbar, elementspath, resize, contextmenu*/

// bender.editor = {
// 	config: {
// 		autoParagraph: false,
// 		allowedContent: true
// 	}
// };

bender.editors = {
	reversecontextmenuswitching: {
		name: 'editor1',
		creator: 'inline',
		config: {
			extraPlugins: 'reversecontextmenuswitching'
		}
	},
};

bender.test( {
    'test editor with right click spell checker': function() {
        var ed = this.editor, bot = this.editorBot;
        //CKEDITOR.document.
        //bot.reversecontextmenuswitching('this is a tessst');
        // var editor = this.editors.reversecontextmenuswitching,
        //     describedBy = editor.editable().getAttribute( 'aria-describedby' );
        var bot = this.editor.bot;
        
        //assert.isNotNull( describedBy, 'editable has aria-describedby attribute' );
        //var label = CKEDITOR.document.getById( describedBy );
        //assert.isNotNull( label, 'label element exists' );
        var misspelledword = "tesst";
        ed.document.body = misspelledword;
        var expectedReplacement = "test";
        var replacedWord = "";

        this.editor.execCommand( 'rightClick' );
        this.editor.execCommand( 'enter' );
        this.editor.execCommand( 'enter' );
        var replacedWord = ed.document.getBody().getText();
        assert.areSame( expectedReplacement, replacedWord, 'Replaced Word is not expected.' );
    },

    'test editor without a11y plugin has aria-describedby': function() {
        // var editor = this.editors.withoutA11y,
        //     describedBy = editor.editable().getAttribute( 'aria-describedby' );

        assert.isNull( describedBy, 'editable does not have aria-describedby attribute' );
    }
} );



// ( function() {
// 	'use strict';

// 	bender.editors = {
// 		reversecontextmenuswitching: {
// 			name: 'editor1',
// 			creator: 'inline',
// 			config: {
// 				extraPlugins: 'reversecontextmenuswitching'
// 			}
// 		},
// 	};

// 	bender.test( {
// 		'test editor with right click spell checker': function() {
// 			var editor = this.editors.reversecontextmenuswitching,
// 				describedBy = editor.editable().getAttribute( 'aria-describedby' );
//             var bot = this.editor.bot;
//             this.
// 			assert.isNotNull( describedBy, 'editable has aria-describedby attribute' );
// 			var label = CKEDITOR.document.getById( describedBy );
// 			assert.isNotNull( label, 'label element exists' );
// 			assert.areSame( editor.lang.common.editorHelp, label.getHtml(), 'label\'s content' );
// 		},

// 		'test editor without a11y plugin has aria-describedby': function() {
// 			var editor = this.editors.withoutA11y,
// 				describedBy = editor.editable().getAttribute( 'aria-describedby' );

// 			assert.isNull( describedBy, 'editable does not have aria-describedby attribute' );
// 		}
// 	} );
// } )();
