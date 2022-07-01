import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {

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
