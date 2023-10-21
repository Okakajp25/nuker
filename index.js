import { world, system } from "@minecraft/server";
import * as MCUI from "@minecraft/server-ui";

world.afterEvents.playerBreakBlock.subscribe(ev => {
    const { itemStackAfterBreak, 
        player, 
        brokenBlockPermutation,
        itemStackBeforeBreak
    } = ev;
    console.log(player)
    console.log(itemStackBeforeBreak)
    console.log(itemStackAfterBreak)
    console.log(brokenBlockPermutation)
})