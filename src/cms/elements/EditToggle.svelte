<script>
  import { editMode } from "../stores/editStore";
</script>

<button
  class="fixed top-0 right-0 p-2 text-xs text-white bg-blue-500 rounded-bl-md"
  on:click={() => editMode.set(!$editMode)}
>
  {#if $editMode}
		Edit Mode
  {:else}
		Preview Mode
  {/if}
</button>
