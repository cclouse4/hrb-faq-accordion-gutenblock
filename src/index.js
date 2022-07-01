import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import './style.scss';

import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType( 'create-block/hrb-faq-accordion', {

	attributes: {
		questionContent: {
			type:		'string',
			source: 'html',
			selector:	'.question-content'
		},
		answerContent: {
			type:		'string',
			source: 'html',
			selector:	'.answer-content'
		}
	},

	edit: Edit,
	save,
} );
