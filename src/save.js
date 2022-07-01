import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({className, attributes}) {

	const blockProps = useBlockProps.save();

	return (
		<div class="accordion wp-block-create-block-accordion-block wp-block" {...blockProps}>
  		<div class="accordion-item">
    		<a class="accordion-item--a" href="#">
      		<div class="accordion-item--question">
						<RichText
							tagName="h3"
							value={attributes.questionContent}
							className="question-content"
						/>
      		</div>
    		</a>
				<div class="accordion-item--answer">
					<RichText
						tagName="p"
						value={attributes.answerContent}
						className="answer-content"
					/>
				</div>
  		</div>
		</div>
	);
}
