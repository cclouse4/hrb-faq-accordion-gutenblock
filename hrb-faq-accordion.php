<?php
/**
 * Plugin Name:       Hrb Faq Accordion
 * Description:       FAQ Accordion for HRB Block Advisors.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Cassie Clouse (Chemistry)
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       hrb-faq-accordion
 *
 * @package           create-block
 */

function create_block_hrb_faq_accordion_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_hrb_faq_accordion_block_init' );



add_action('wp_enqueue_scripts','add_hrb_scripts');

function add_hrb_scripts() {
	wp_enqueue_script( 'hrb_faq_jquery', plugins_url( '/js/jquery-3.6.0.min.js', __FILE__ ));
	wp_enqueue_script( 'hrb_faq_scripts', plugins_url( '/js/scripts.js', __FILE__ ), array('hrb_faq_jquery'));
}