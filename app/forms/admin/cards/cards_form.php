<?php
class CardsForm extends AdminForm{
	function _add_fields($options = array()) {
		$options += array(
			"add_catalog_id_field" => true,
			"catalog_id_required" => true,
		);
		$this->add_translatable_field("name", new CharField(array(
			"label" => _("Name"),
		)));
		if($options["add_catalog_id_field"]){
			$this->add_field("catalog_id", new CatalogIdField(array(
				"label" => _("Catalog number"),
				"required" => $options["catalog_id_required"],
			)));
		}
		$this->add_translatable_field("teaser", new TextField(array(
			"label" => _("Teaser"),
			"required" => false,
			"help_text" => _("Brief description"),
		)));
		$this->add_field("brand_id", new BrandField(array(
			"label" => _("Brand"),
			"required" => false,
		)));
		$this->add_field("collection_id", new CollectionField(array(
			"label" => _("Collection"),
		)));
		$this->add_field("tags", new TagsField(array(
			"label" => _("Tags"),
			"required" => false,
			"create_missing_tags" => true,
			"hint" => "akce , novinka"
		)));
	}
}