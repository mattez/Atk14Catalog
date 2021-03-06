{*
 * Vyrenderuje seznam priloh pro dany object.
 *
 * {render partial="shared/attachments" object=$page}
 *}

{assign var=attachments value=Attachment::GetAttachments($object)}

<h3 id="attachments">{button_create_new action="attachments/create_new" table_name=$object->getTableName() record_id=$object->getId() return_to_anchor=attachments}{t}Add an attachment{/t}{/button_create_new}{t}Attachments{/t}</h3>

{if !$attachments}
		<p>{t}Currently there are no attachments.{/t}</p>
{/if}

<ul class="list-group list-group-attachments list-sortable" data-sortable-url="{link_to action="attachments/set_rank"}">
	{if $attachments}
		{render partial="shared/attachment_item" from=$attachments item=attachment}
	{/if}
</ul>
