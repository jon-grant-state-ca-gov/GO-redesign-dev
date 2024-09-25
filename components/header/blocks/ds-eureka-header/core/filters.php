<?php
/**
 * Ds Eureka Header Filters
 *
 * @package cagov-design-system
 */

global $wp_version;

$cagov_design_system_is_under_5_8 = version_compare( $wp_version, '5.8', '<' ) ? '' : '_all';

add_filter( "block_categories$cagov_design_system_is_under_5_8", 'cagov_design_system_block_categories', 10, 2 );
add_filter( 'script_loader_tag', 'cagov_design_system_ds_eureka_header_script_loader_tag', 10, 3 );

if ( ! function_exists( 'cagov_design_system_block_categories' ) ) {
	/**
	 * Register Ds Eureka Header Gutenberg Block categories to the Block editor
	 *
	 * @link https://developer.wordpress.org/reference/hooks/block_categories_all/
	 *
	 * @param  array                   $categories Array of categories for block types.
	 * @param  WP_Block_Editor_Context $post The current block editor context.
	 * @return array
	 */
	function cagov_design_system_block_categories( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug'  => 'cagov-design-system',
					'title' => 'CA Design System',
				),
			),
			$categories
		);
	}
}

if ( ! function_exists( 'cagov_design_system_ds_eureka_header_script_loader_tag' ) ) {
	/**
	 * Filters the HTML script tag of an enqueued script.
	 *
	 * @param  mixed $tag The <script> tag for the enqueued script.
	 * @param  mixed $handle The script's registered handle.
	 * @param  mixed $src The script's source URL.
	 * @return string
	 */
	function cagov_design_system_ds_eureka_header_script_loader_tag( $tag, $handle, $src ) {
		// Register script as module.
		if ( 'cagov-design-system-ds-eureka-header' === $handle ) {
			$tag = sprintf( '<script type="module" id="cagov-design-system-ds-eureka-header-js" src="%1$s"></script>', $src );
		}

		return $tag;
	}
}

