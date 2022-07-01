import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({className, attributes}) {

	const blockProps = useBlockProps.save();

	return (


		<div class="wp-block-create-block-hrb-faq-accordion wp-block">
			<div class="accordion">
				<div class="accordion-item">
					<a class="accordion-item--a" href="#">
						<div class="accordion-item--question">
							<RichText.Content
								{...blockProps}
								tagName="h3"
								value={attributes.questionContent}
								className="question-content"
							/>
						</div>
					</a>
					<div class="accordion-item--answer">
						<RichText.Content
							{...blockProps}
							tagName="p"
							value={attributes.answerContent}
							className="answer-content"
						/>
					</div>
				</div>
			</div>
		</div>

		
	);
}
