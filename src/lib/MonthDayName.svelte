<script lang="js">
import { onMount } from "svelte";

import { Months } from "./../models/months";

import { DateConverter } from "./../utils/dateConverter";

	export let calByMonthEntry;
	export let innerWidth;
	export let monthsToDisplay;
	export let monthColor;

	const today = new Date("3/17")

	let queue = []
	function SlotForBday(bdayObj) {
		 const dayOfYear = DateConverter.DayOfYear(bdayObj['month'], bdayObj['day'])
            const filteredQueue = queue.filter(obj => obj.dayOfYear > (dayOfYear - 7))
            queue = filteredQueue
            bdayObj.dayOfYear = dayOfYear
            bdayObj.lineNumber = filteredQueue.length
            queue.push(bdayObj)
			return filteredQueue.filter(bday => bday.dayOfYear > (dayOfYear-7) && bday.dayOfYear != dayOfYear).length
	}

	const todayCheck = (idx) => {
		return today.getDate() == (idx+1) && (today.getMonth()+1) == parseInt(Months[calByMonthEntry[0]])
	}    

	let monthDiv;
	onMount(() => {
		monthDiv.scrollTo(3000,0)
	})
    
</script>

<div class="month" style="background-color: #{monthColor}"  bind:this={monthDiv}>
	{calByMonthEntry[0]}
</div>

<div class="day">
	{#each Object.values(calByMonthEntry[1]) as bdayObjList, i}
        {#if bdayObjList.length > 0}
            <div class="day-unit" 
			class:today="{todayCheck(i)}" 
			style="background-color: #{monthColor}; border: 1px solid gray;"/>
        {:else}
            <div 
			class="day-unit" 
			class:today="{todayCheck(i)}"
			id={(DateConverter.DayOfYear(Months[calByMonthEntry[0]], (i+1).toString())).toString()}/>
        {/if}
	{/each}
</div>

<div class="day">
	<!-- going to switch to two column list of names, past bdays grayed out, 
	future bdays brighter.  Hovering or touching a square will magnify that name and unhide DOB -->
	{#each Object.values(calByMonthEntry[1]) as bdayObjList}
		<div class="name-unit">
			{#each bdayObjList as bdayObj}
				{@html "<br>".repeat(SlotForBday(bdayObj))}{bdayObj.name}
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

	.today {
		border: 1px solid red;
	}

	.name {
		border: 1px solid fuchsia;
		height: 2em;
	}
</style>
