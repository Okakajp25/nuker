import { world, system, player } from "@minecraft/server";
import * as MCUI from "@minecraft/server-ui";

world.afterEvents.playerBreakBlock.subscribe(ev => {
    const { itemStackAfterBreak, 
        player, 
        brokenBlockPermutation,
        itemStackBeforeBreak
    } = ev;
    
})