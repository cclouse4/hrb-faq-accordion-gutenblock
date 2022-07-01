import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({className, attributes, setAttributes}) {

	const blockProps = useBlockProps();

	return (

		[

		<div class="accordion" {...blockProps}>
  		<div class="accordion-item">
    		<a class="accordion-item--a" href="#">
      		<div class="accordion-item--question">
						<RichText
							tagName="h3"
							value={attributes.questionContent}
							onChange={(questionContent) => setAttributes({questionContent})}
							placeholder={__('Question Content')}
							className="question-content"
						/>
      		</div>
    		</a>
				<div class="accordion-item--answer">
					<RichText
						tagName="p"
						value={attributes.answerContent}
						onChange={(answerContent) => setAttributes({answerContent})}
						placeholder={__('Answer Content')}
						className="answer-content"
					/>
				</div>
  		</div>
		</div>

		]
		
	);
}
