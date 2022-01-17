<script lang="js">
import { incrementHex } from "./../utils/hexConverter";


	export let calByMonthEntry;
	export let innerWidth;
	export let monthsToDisplay;
	export let monthColor;

    let lastBdays = []
    
</script>

<div class="month" style="background-color: #{monthColor}">
	{calByMonthEntry[0]}
</div>

<div class="day">
	{#each Object.values(calByMonthEntry[1]) as bdayObjList, i}
        {#if bdayObjList.length > 0}
            <div class="day-unit" style="background-color: #{monthColor}; border: 1px solid gray;"/>
        {:else}
            <div class="day-unit"/>
        {/if}
	{/each}
</div>

<div class="day">
	{#each Object.values(calByMonthEntry[1]) as bdayObjList, i}
		<div class="name-unit">
            <!-- objects in last 7 days, br.repeat length, then obj.name -->
			{#each bdayObjList as bdayObj}
                 {bdayObj.name}<br>
            {/each}
		</div>
	{/each}
</div>

<style>
	.month {
		border: 1px solid blue;
		height: 2em;
	}
    

	.day {
		border: 1px solid gray;
		height: 1em;
		display: grid;
		grid-template-columns: repeat(31, auto);
	}
	.day-unit {
		/* border: 1px solid gray; */
	}

	.name {
		border: 1px solid fuchsia;
		height: 2em;
	}
</style>
