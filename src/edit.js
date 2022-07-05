import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { TextControl, PanelBody, PanelRow, ToggleControl, ExternalLink } from '@wordpress/components';
import './editor.scss';

export default function Edit({className, attributes, setAttributes}) {

	const blockProps = useBlockProps();

	const {
		questionContent,
		answerContent,
		analyticsLOC,
		analyticsNM
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

	function onChangeLoc(newLoc) {
		setAttributes({
			analyticsLOC: newLoc
		});
	}

	function onChangeNM(newNm) {
		setAttributes({
			analyticsNM: newNm
		});
	}

	return (

		[

		<InspectorControls>
			<PanelBody
				title={ __('Analytics')}
				initialOpen={true}
			>
				<PanelRow>
					<fieldset>
						<TextControl
							label={__('loc:')}
							value={analyticsLOC}
							onChange={onChangeLoc}
							help={__('Add the value for loc')}
						/>
					</fieldset>
				</PanelRow>
				<PanelRow>
					<fieldset>
						<TextControl
							label={__('nm:')}
							value={analyticsNM}
							onChange={onChangeNM}
							help={__('Add the value for nm')}
						/>
					</fieldset>
				</PanelRow>
			</PanelBody>
		</InspectorControls>,

		<div class="wp-block-create-block-hrb-faq-accordion wp-block" itemscope itemType="https://schema.org/FAQpage" {...blockProps}>
			<div class="accordion" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
				<div class="accordion-item">
				<a class="accordion-item--a" href="#" aria-expanded="false" itemprop="name"
						data-analytics={"{" + '"loc"' + ' : ' + '"' + attributes.analyticsLOC + '"' + ' , ' + '"nm"' + ' : ' + '"' + attributes.analyticsNM + '"' + "}"}
					>
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
					<div class="accordion-item--answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
						<div itemprop="text">
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
		</div>

		]
		
	);
}
