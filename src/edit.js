import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({className, attributes, setAttributes}) {

	const blockProps = useBlockProps();

	const {
		questionContent,
		answerContent
	} = attributes;

	function onChangeQuestion(newQuestion) {
		setAttributes({
			questionContent: newQuestion
		});
	}

	function onChangeAnswer(newAnswer) {
		setAttributes({
			answerContent: newAnswer
		});
	}

	return (

		[

		<div class="wp-block-create-block-hrb-faq-accordion wp-block" {...blockProps}>
			<div class="accordion">
				<div class="accordion-item">
					<a class="accordion-item--a" href="#">
						<div class="accordion-item--question">
							<RichText
								{...blockProps}
								tagName="h3"
								value={attributes.questionContent}
								onChange={ onChangeQuestion }
								placeholder={__('Question Content')}
								className="question-content"
							/>
						</div>
					</a>
					<div class="accordion-item--answer">
						<RichText
							tagName="p"
							value={attributes.answerContent}
							onChange={ onChangeAnswer }
							placeholder={__('Answer Content')}
							className="answer-content"
						/>
					</div>
				</div>
			</div>
		</div>

		]
		
	);
}
