var scenario = {
  //DAY 1==============================================================================================================================
  1001: { //GAME OVER LOSE
    image: "imgs/s1000.jpg",
    text: "Game over.",
    options: [],
    gameover: ""
  },
  1000: { //GAME OVER LOSE
    image: "imgs/s1000.jpg",
    text: "Game over.",
    options: [],
    gameover: ""
  },
  1: { //Starting Scene
    image: "imgs/s3.png",
    text: "You glance around and see two paths to take in front of you - one leads left and the other leads right.",
    options: [['Take the left path', '2'], ['Follow the trail to the right', '10']]
  },
  2: { //Left Path
    image: "imgs/s1.png",
    text: `You head towards the left path and soon find yourself in the mountains. The air is cool and crisp, and the trees tower over you.
    
    As you make your way through the rocky terrain, you spot an old man sitting on a rock at the mountain edge looking out and an old unkept path to the right. `,
    options: [['Approach and speak to the man', '3'], ['Attempt to rob the man', '4']]
  },
  3: {//Approach old man
    image: "imgs/s2.png",
    text: `Old Man: "The path further leads to a dead end with a high ledge, and over it brings you straight to the next town I'm guessing you're tryna get to. You can try get up there, however, it is quite dangerous."  

    The old man coughs. 
    
    Old Man: "It may be best to go through the sewers sonny."`,

    options: [['Rob the man', '4'], ['Go back the way you came', '1'], ['Attempt to go further', '8']]

  },
  4: { //Robbing Minigame
    minigame: "minigame_1_oldman"
    //If successful to scene with rope Scene 5
  },
  5: { //Success robbing
    image: "imgs/S5.jpg",
    text: `You successfully rob the old man and take his rope from his bag.  

    rope obtained shown in ‘Your Items’ along with package
    
    Old man: "Fair play. That rope was my family heirloom..and now you’ve taken it from me."
    
    The old man shortly afterwards passes out. 
    
    You follow the right path leading you to a dead end, a cliff ledge blocking your path.
     
    You look up at the ledge with thought. 
    
    "I could use the rope I got".`,
    options: [['Use rope', '6']],
    addPlayerItem: ["Rope", "rope.png"],
    karma: [15, 20]
    //If successful to scene with rope Scene 6
  },
  6: {//Right path with rope
    image: "imgs/S6.jpg",
    text: `With rope at the ready, you make a knot with the rope and throw it up to a rock sticking out of the ledge and climb. 
    
    You make it to the top and an overview of the town. It looks decrepit but the sight blesses your eyes. 
 
    An overgrown trail lays before you leading down straight to the town, and you follow it. 

    Making your way down the mountain you find yourself on the outskirts of the town.`,
    options: [['Head into town', '7']],
    removePlayerItem: ["Rope"]
  },
  7: { //INTO TOWN ---------------------------------------------- > to Day 2
    image: "imgs/s7.jpg",
    text: `The town looks to be abandoned, though you walk towards it anyway in the case that the gas station location could be here somewhere in the town. 
  
    You warily look around but to much luck there were no gas stations there, nor any people. The town was deserted. 
      
    The warmth you feel on your skin lessens, and you feel yourself grow tired with each footstep you take. 
       
    The sun is going down, it’s getting late, and it won’t be long till it gets dark.  
       
    You don’t know what lurks when night falls, so you decide to end your day here, to rest in the town and use up the rest of the day to scavenge for food to take with you and find some place intact to settle and camp for the night. 
       
    You lie down after setting up your camp exhausted, and hear strange noises around you, but you manage to keep calm and you feel your eyes slowly close shut. `,
    options: [['Sleep', '19'],]
    // DAY END ----------------------------------------------------------------------
  },
  8: { // Go to cliff - before robbing minigame
    image: "imgs/S8.jpg",
    text: `You follow the right path leading you to a dead end, a cliff ledge blocking your path.
     
    You look up at the ledge with thought. 
      
    I have no way to get down from here.
      
    You decide not to test your chances today`,
    options: [['Return to the start', '1']]
  },

  9: { //Return to start - robbery failed - FIX?
    image: "imgs/S9.jpg",
    text: `You were unsuccessfully in robbing the old man and you’re quite injured. 

    Old man: "Get out of here kid. I’m disappointed in you."
      
    You watch the man slowly walk down the mountain and disappear. You carefully get up. You have to continue.

    Wounded from your encounter, you press forward up the mountain, you find yourself at a cliff with no way down. You must return to the beginning.
      
    You find yourself were you began your journey, it seems there is nothing to gain from taking the left path.
      
    Your only option is the right path now.`,
    options: [['Take the right path', '11']],
    karma: [15, 20],
    damage: [10, 20]
  },

  //Right Path
  10: { //Right path begin
    image: "imgs/S4.png",
    text: `You follow the right trail which leads you into a dark and damp sewer system. The stench is overpowering, and you can barely see a few feet in front of you.  

      As you move through the sewers, you soon come across a locked gate blocking your path. You realize that you'll need to find a way to open it if you want to continue on.  `,
    options: [['Go back out the sewers', '1'], ['Inspect locked gate', '12']]
  },

  11: { //Robbery Right path
    image: "imgs/S11.jpg",
    text: `You follow the right trail which leads you into a dark and damp sewer system. The stench is overpowering, and you can barely see a few feet in front of you.  

      As you move through the sewers, you soon come across a locked gate blocking your path. You realize that you'll need to find a way to open it if you want to continue on. There seems to be a keypad beside it? I wonder if there's any clues on what the code could be... `,
    options: [['Inspect locked gate', '12']]
  },
  12: { //KEYPAD1 MINIGAME GOTO 13
    minigame: "keypad1"
  },
  13: { //LOCKPICK MINIGAME SUCCESS CONDITIONAL
    image: "imgs/s5.png",
    text: `You push the gate and it opens. You enter through and walk heading further into the depths of the sewers, leaving behind the echos of your footsteps in the sewer tunnel and the clang of the gate close where you once were. 

      A light begins to come in sight at the end of the tunnel.       
       
      But before you can even register, suddenly you hear a loud splash. You look down and see a massive crocodile emerging from the murky water. It's at least 60 feet long and looks incredibly dangerous. `,
    options: [['Square up the croc', '16'], ['Shoot the beast', '14'], ['Attempt to flee past the croco', '15']]
  },
  14: { //Shoot the beast
    image: "imgs/S14.jpg",
    text: `Before you register to pick up your gun, the beast strikes faster and you were gobbled up in seconds; What did you think would happen? `,
    options: [['Game Over', '1000']]
  },
  15: { //Attempt to flee
    image: "imgs/S14.jpg",
    text: `The crocodile catches up to you instantly and you get gobbled up in seconds. Better luck next time. `,
    options: [['Game Over', '1000']]
  },
  16: { //Square up
    image: "imgs/S16.jpg",
    text: `You walk past the crocodile only for it to swim along your side as you walk. 

      It has taken a liking to you. 
       
      Getting back to the task at hand, you continue to head towards the light at the end of the tunnel. 
       
      You later find that it is the exit and end of the sewers. It’s massive in size with bars and a closed gate. 
      
      You reach out to open the gate before thinking:`,
    options: [['Leave the sewer gate open', '17'], ['Leave the sewer gate closed', '18']],
    addPlayerItem: ["Croccy", "faviconCroccy.png"]

  },
  17: { //Open Gate
    image: "imgs/S17.jpg",
    text: `You open and step through the gate and decided to leave the sewer door open, letting croccy be free from its grimy home. 
      
      He waddles, stops to look at you, then stomps fast out the sewer gate and past you only to disappear into bushes quite a distance away. 
 
      You watch the beast in its endeavors, then shrug off what just happened to look out to see you're on the outskirts of the town.`,
    options: [['Head into town', '7']]
  },
  18: { //Close Gate
    image: "imgs/s4.png",
    text: `You decide to leave the sewer gate closed and look behind you to wave your scaly friend goodbye. 
      
      The beast looks at you a little while with a shimmer in its' eyes, but then turns and slithers back into the waters and depths of the sewers. 
 
      On with your journey you look around you and notice you’re on the outskirts of the town. `,
    options: [['Head into town', '7']]
  },
  //DAY 1==============================================================================================================================

  //=============================================================================================================================================================================

  //DAY 2==============================================================================================================================
  19: { //Wake up
    image: "imgs/S19.jpg",
    text: `You slept till the early afternoon and feel the heat of the sun from outside. 
    
    It’ll be pretty hot today you can tell. You pack up your camping equipment and your food supplies seem to be fine to last for the day; you’ll however need to scavenge for more tomorrow you plan. 
    
    You set off to leave the town. 

    On the town outskirts the sun blares down on you, you feel sweat drip down your face. Then, suddenly, you hear whirring noises and are suddenly surrounded by gusts of dust and gravel on the ground. 
    
    As it fades, you see shady people on motorbikes circling you and cackling.  

    You hadn’t noticed them coming towards you being distracted by the heat.

    These may be robbers, and you need to protect yourself and the package. `,
    options: [['Fight the robbers', '21']]
  },

  // 20 SKIPPED

  21: { //FIGHT ROBBERS MINIGAME go to 23
    minigame: "raider_minigame_1"
  },
  22: { //FIGHT ROBBERS FAILURE CONDITION
    image: "imgs/S22.jpg",
    text: `You failed to fight against the robbers.  

    They were relentless and shot you to death.  
    
    Better Luck next time. 
    `,
    options: [['Game Over', '1000']]
  },
  23: { //FIGHT ROBBERS SUCCESS CONDITION
    image: "imgs/S23.jpg",
    text: `The robbers have been fatally injured and pass out on the spot. They won’t be awake for a while. 

    You reload your revolver and safely put it back in your bag. Beside one of the uncurious robbers you notice on the ground beside them lays a golden key and you take it. It could come in use somehow.  
    
    You take a deep breath and look at the package in your bag anxiously.  
    
    Thank God. It hadn't looked to have taken a hit and looks fine. You continue forward North.  
    
    Around you, greenery started to appear, and you notice you come to a forest and a bit to the right a cave entrance which had bars and a locked gate.
    `,
    options: [['Enter the forest', '28'], ['Go to the cave', '24']],
    addPlayerItem: ["Gold Key", "key.png"]
  },
  24: { //
    image: "imgs/S24.jpg",
    text: `You walk towards the cave and inspect the gate and its lock. 
    
    Upon closer inspection, the key that you took from the robbers looks to fit into it. 
    
    You use the key on the lock and to your surprise it opens, and you enter the cave. This must be the robbers’ den.
    `,
    options: [['Turn on flashlight', '25']]
  },
  25: { //FLASHLIGHT MINIGAME
    minigame: "flashlight"
  },
  26: { //Leave robbers den CONDITION
    image: "imgs/S23.jpg",
    text: `You exit the cave and hear the clank of the metal gate shut back close and walk to where you once stood where you can view the entrance of the forest and the cave. `,
    options: [['Go back to cave', '27'], ['Go to forest', '28']],
    removePlayerItem: ["Gold Key"]
  },
  27: { //Try to return to cave
    image: "imgs/S27.jpg",
    text: `As you walk back to the cave and rummage for the key in your pockets, you notice it’s not there anymore. 
    
    You must have dropped it in the cave while wandering around in the dark.  

    Oh well. 
    
    You decide to enter the forest instead.  `,
    options: [['Go to forest', '28']]
  },
  28: { //Go to forest
    image: "imgs/S28.jpg",
    text: `You enter the forest. The leaves crunch with each step you take, and the earthy aroma fills your nose. 
    
    Here at the forest, the trees loom over you once more and you can see the sun come through the gaps in the trees and leaves. It feels peaceful. 

    There are multiple directions you could take. You have a feeling you must choose wisely.`,
    options: [['Go left', '31'], ['Go middle', '29'], ['Go right', '30']]
  },
  29: { //Go middle
    image: "imgs/S29.jpg",
    text: `Taking the forward path takes you to a dead end. 
    
    A cliff edge stands before you; it’s quite high up. 
    
    There’s nothing you could do here, so you walk back to where you were previously. `,
    options: [['Return', '28']]
  },
  30: { //Go right
    image: "imgs/S30.jpg",
    text: `Walking in the direction right, trees seem to block your path. They are all too bunched up to walk through. The middle tree you notice has a note taped to its trunk.  
 
    Note reads: Warning, there is a bear. 
    
    You feel yourself break out in a cold sweat.  
     
    You also thought to yourself and feel a deadpan expression fall on your face. It would have been great to know this information before you even entered the forest in the first place.. 
    
    Warily you walk back to where you were previously`,
    options: [['Return', '28']]
  },
  31: { //Go left
    image: "imgs/S31.jpg",
    text: `Seems you have went the right way, the path leads on.`,
    options: [['Go left', '32'], ['Go middle', '33'], ['Go right', '35']]
  },
  32: { //Go left - LOSE HEALTH
    image: "imgs/S32.jpg",
    text: `As you walk to the left, you hit your head off a low hanging branch. 
    
    You notice there are a lot of low hanging branches in this path and continue with caution.`,
    options: [['Continue through the branches', '35']],
    damage: [5, 10]
  },
  33: { //Go middle
    image: "imgs/S31.jpg",
    text: `You choose to walk in the direction straight ahead and you soon notice the path is too overgrown with grass, bushes and branches. 
    
    It would be impossible to walk through. 
    
    You head back to where you were previously.`,
    options: [['Return', '34']]
  },
  34: { //Return
    image: "imgs/S35.jpg",
    text: `You returned to where you were, the path leads on.`,
    options: [['Go left', '32'], ['Go right', '35']]
  },
  35: { //Correct way
    image: "imgs/S31.jpg",
    text: `Seems you have went the right way, the path leads on.`,
    options: [['Go left', '36'], ['Go middle', '38'], ['Go right', '37']]
  },
  36: { //Left - LOSE HEALTH
    image: "imgs/S38.jpg",
    text: `You walk left and you find there's are a lot of jagged leaves. 
    
    You feel tingles on your skin and notice too late that they’re nettles. 
    
    You’ll need to treat them later. `,
    options: [['Continue', '38']],
    damage: [5, 10]
  },
  37: { //Right - LOSE HEALTH
    image: "imgs/S37.jpg",
    text: `You walk right and continue walking for a while. 
    
    Suddenly, you hear a metallic snap and feel a sharp pain in your leg. 
    
    Ironically, it’s a normal sized bear trap. 
    
    You take a while to take it off and bandage your wound. 
    
    You need to keep going. `,
    options: [['Continue', '38']],
    damage: [15, 25]
  },
  38: { //Correct way
    image: "imgs/S38.jpg",
    text: `Seems you have went the right way, the path leads on.`,
    options: [['Go left', '39'], ['Go middle', '40'], ['Go right', '41']]
  },
  39: { //Left
    image: "imgs/S38.jpg",
    text: `You choose to walk in the direction left and you soon notice the path is too overgrown with grass, bushes and branches. 
    
    It would be impossible to walk through. 
    
    You head back to where you were previously. `,
    options: [['Return', '38']]
  },
  40: { //Middle - Bear Death
    image: "imgs/S40.jpg",
    text: `Taking the path straight ahead, you walk for a while. Abruptly, you walk into something that blocks your way. It’s soft..massive and brown. 

    You walked into the 60ft bear laying in slumber, and the moment you realise that; it’s too late. 
     
    It rolls over and you’re squished to death.`,
    options: [['Game Over', '1000']]
  },
  41: { //Correct way
    image: "imgs/s35.jpg",
    text: `Seems you have went the right way, the path leads on.`,
    options: [['Go left', '44'], ['Go middle', '42'], ['Go right', '43']]
  },
  42: { //Middle - LOSE HEALTH
    image: "imgs/S29.jpg",
    text: `As you take the forward path, you hadn’t realised you were at the top of the cliff edge and fall. 

    You end up back at the start. Unfortunate :( 
      
    You are faced with the same paths`,
    options: [['Go left', '44'], ['Go middle', '42'], ['Go right', '43']],
    damage: [5, 10]
  },
  43: { //Right 
    image: "imgs/S32.jpg",
    text: `Walking in the direction right, trees seem to block your path. 
    
    They are all too bunched up to walk through. 
    
    You decide to head back to where you were previously. 
      
    You are faced with the same paths`,
    options: [['Go left', '44'], ['Go middle', '42'], ['Go right', '43']]
  },
  44: { //Correct way
    image: "imgs/S38.jpg",
    text: `As you make your way through the inner depths of the forest, you notice how the trees in this area are much taller and looming as they were a bit earlier. 

    You feel that the air is still. 
    
    Suddenly, there’s stomps and the crunching of leaves in the far distance. You also notice hearing a low growl. `
    ,
    options: [['Go towards the noise', '45'], ['Scare off the unknown being', '46'], ['Lay on the ground', '47']]
  },
  45: { //BEAR DEATH 2
    image: "imgs/S45.jpg",
    text: `A ferocious brown bear abruptly appears and looms over you at a shocking 60ft tall at standing height. 
    
    How you hadn’t noticed the beast earlier was unbeknownst to you. 
    
    It violently lashes out as you just as meet its eyes, and you unfortunately meet the end of your delivery here.
    
    better luck next time. `
    ,
    options: [['Game Over', '1000']]
  },
  46: { //BEAR DEATH 3
    image: "imgs/S45.jpg",
    text: `A ferocious brown bear abruptly appears at a shocking 60ft tall standing height. 
    
    Your actions are futile, and the beast is unfazed. 
    
    It scoffs and stomps on you, and you are crushed to death. 
    
    Tough luck. `
    ,
    options: [['Game Over', '1000']]
  },
  47: { //Correct option
    image: "imgs/S47.jpg",
    text: `You quickly lay on the ground and try to calm and slow your breathing; essentially to look and act dead. 

    The unknown being comes into sight. 
    
    It’s an outstanding 60ft tall brown bear standing on its hind legs. The sight of it sends a shiver down your spine but you try your best to hold your breath and continue to lay still. 
    
    The creature passes you and you hear the stomps and feel the vibration on the ground become quieter and weaken till it comes back to a still. 
    
    Thankfully you made it out of that encounter, and you let out a sigh. You thought to yourself and decide to settle somewhere in the forest a distance opposite the beast's path. It’s been a long day.  
     
    Looking up at the sky between the leaves, it’s painted with the colours yellow, orange and purple. It’s evening. 
     
    You set up a camp and bed at a large enough tree hollow you found while wandering the woods to hide yourself from any other dangerous beings and fall asleep instantly`
    ,
    options: [['Sleep', '48']]
  },
  //DAY 2==============================================================================================================================

  //=============================================================================================================================================================================

  //DAY 3==============================================================================================================================
  48: { //Day 3
    image: "imgs/S48.jpg",
    text: `You wake in the tree hollow you slept in and hear birds loudly chirping outside. You can assume that it’s the early morning. 
 
    Feeling the rumble of your stomach, and the dryness of your mouth, today you should find and gather food and a clean water source. You rechecked your bag and supplies and there is indeed nothing to live on for the day and onwards. 
     
    You pack up and leave the hollow and look around on where to start searching. 
    
    To the right you can faintly hear what you make out to be trickles of water, and to the left it smells a bit marshy and there looks to be a lot of bushes around. There might be berries there. `
    ,
    options: [['Inspect the sounds to the right', '56'], ['Go to the left area', '49']]
  },
  49: { //Left way
    image: "imgs/S49.jpg",
    text: `Walking towards the left, you look around and find yourself at a marsh. 
    
    The smell is putrid. The ground mushes with each step, and the air feels moist. 
    
    You hadn’t taken into consideration that radiation may linger in the area. 

    You watch out for patches and puddles of stagnant water. 
    
    At a distance, you then spot a bush full of berries.
    
    You inspect the berries. 
    
    They’re round and come in green, red and black colours, and are all bunched up on red stems. `
    ,
    options: [['Eat the berries', '50'], ['Look around the area a bit more', '51']]
  },
  50: { //Eat berries
    image: "imgs/S50.jpg",
    text: `You eat the berries. 
    
    The hunger you feel overrides its awful taste, and after you’ve eaten a handful, you start to feel nauseous, and feel like vomiting. 
    
    Your vision appears blurry, and you pass out. 
    
    You die due to poison from the pokeweed berries.`
    ,
    options: [['Game Over', '1000']],
    damage: [100, 100]
  },
  51: { //Look around more
    image: "imgs/S50.jpg",
    text: `You decide to look at what else is in the area and soon find a patch of different berries. 

    Inspecting these berries, they’re also round but come in blue, red and black colors. 
    
    Its stems are brown and some green with red streaks. `
    ,
    options: [['Eat the berries', '53'], ['Return to previous berries', '52']]
  },
  52: { //Return to previous berries
    image: "imgs/s50.jpg",
    text: `You decide to look at what else is in the area and soon find a patch of different berries. 

    Inspecting these berries, they’re also round but come in blue, red and black colors. 
    
    Its stems are brown and some green with red streaks. `
    ,
    options: [['Eat the berries', '50'], ['Return to previous berries', '51']]
  },
  53: { //Go to gas station
    image: "imgs/s53.jpg",
    text: `You make your way through more of the forest cautiously and find yourself on a small path which gets bigger and bigger. 
    
    After a while you're surprised to find yourself on a road and you see a pretty beaten-up gas station in the distance to your left.  
    
    You make your way to the gas station and its entrance, and attempt to open the door. 
    
    It gives in and opens with a loud screech. 
    
    You hope no person or thing resides here and has heard you. `
    ,
    options: [['Continue', '54']]
  },
  54: { //Gas station continued
    image: "imgs/S54.jpg",
    text: `Using your torch, you make your way into what looks like an employee lounge and find a switch. 
    
    With apprehension you flip the switch, and all the lights flicker and turn on to a still. 
    
    The lights give out a buzzing noise. You let out a relieved sigh.  

    You begin to look through the stock aisles of the gas station. 
    
    There are very few items left behind and even fewer in date items. 
    
    You lift a can of beans off the floor and place it in your bag.  `
    ,
    options: [['Continue', '55']]
  },
  55: { //Gas station continued pt2
    image: "imgs/S55.jpg",
    text: `You find another door and open it and it looks to lead you to a hallway. 
    
    You make out that at the end there lies a door with a keypad which glows in the dimness of the hallway. 
    
    It looks to lead to the gas station garage. 

    You decide it’s best to leave it to decipher tomorrow as you feel yourself getting more exhausted with each second that passes from your eventful day. 
    
     
    You make your way back to the employee lounge and take a can of food you have stashed and set it out. 
    
    Using whatever is left of the electricity, you heat your food in a working microwave and eat it. 
    
    It reminds you of a simpler life.  
    
    You sleep in the employee lounge in your sleeping bag trying to keep warm. `
    ,
    options: [['Sleep', '77']]
    // DAY 4 PLEASE
  },
  56: { //RIGHT - RIVER
    image: "imgs/S56.jpg",
    text: `Upon closer inspection of the noise following the direction of where it’s coming from, going through leaves and around trees, it gets louder, and finally you find yourself at a wide fast river which divides the forest in half. 

    The water is clear, unpolluted and seems safe to drink. You take some water from the river and pull out a water bottle from your bag and fill it to have for the rest of your journey. It should be enough to last a while. 
    
    As for food, however, it is still in need of searching for. 

    The river could have fish you could catch, or you could look around more in the area for something else. `
    ,
    options: [['Attempt to catch any fish in the river', '57'], ['Follow and look around river side', '61']]
  },
  57: { //Fish catch
    image: "imgs/S57.jpg",
    text: `You decide you’ll attempt to catch fish.  
    You have never tried fishing before but your parents at the underground settlement taught you survival skills if you ever come to the surface. 
     
    It’s been keeping you alive this far, thankfully. 
    
    You look for anything in the forest which could be of use. You rip off tendrils from forest tree barks for the fishing line and take a large fallen branch. A pocketknife is taken from your bag, and you carve a hook with a smaller branch and put everything together to make a makeshift fishing rod. 
     
    As for bait, you find a large rock around moss and turn it over to find earthworms and gather them to use as bait. 
     
    Now, with pride in your craft, you’re ready to fish. `
    ,
    options: [['Fish', '58']]
  },
  58: { //Fish MINIGAME FIX
    minigame: "fishing"
  },
  59: { //Fish MINIGAME SUCCESS HEALTH FIX
    image: "imgs/S59.jpg",
    text: `You manage to catch quite a few fish successfully and get started on making a fire to cook them on.  

    You are starving, and the smell of the fish cooking makes your stomach rumble. 
     
    You take a bite of the first fish and feel energy and strength return to your body.

    You gain back 10 health. 
    
    The fish will do you for the day, but more food is needed for days onward.  
    
    You decide to look around the forest more. `
    ,
    options: [['Continue your journey', '60']],
    health: [10,20]
  },
  60: { //Fish MINIGAME FAILURE FIXXXXXX
    image: "imgs/S60.jpg",
    text: `Taking back your rod, you slip at the edge of the river and find yourself crashing into the waves of the river current.

    You fail to keep yourself afloat and struggle to breathe and you eventually give in and sink, falling unconscious. 
    
    The river now takes lead of your life. `
    ,
    options: [['Continue', '74']],
    damage: [20, 20]
  },
  // IF YOU DIDNT FIGHT OLD MAN - THIS SCENE AND MORE - LAST SCENE FIX
  61: { //Continue along river
    image: "imgs/S61.jpg",
    text: `Following along the riverside, you stumbled upon a small rustic shack.

    Walking around it you can tell it’s well kept. You then decide to peer into one of the windows.

    You notice a person sitting in the middle of a room on a comfy chair in front of a fireplace, only to then recognise it’s the old man from the mountains. 
    
    You knock on the window and the man jolts up and looks towards you.

    He squints and then grows a happy expression and carefully stands up walking away.

    At the front of the shack, you hear a door unlock and open. 
    `
    ,
    options: [['Enter shack', '62']]
  },
  62: { //Enter shack
    image: "imgs/S61-2.jpg",
    text: `Old man: Hello there!

    He calls out in a joyful tone. 

    Old man: Glad to see you’re alive and made it this far. It was nice to meet you in the mountains. Sorry I couldn’t be of much help to you at the time, but would you like to join me for dinner? You seem like a good kid and must be starving. 
    `
    ,
    options: [['Yes', '64'], ['No', '620']]
  },
  620: { //No option
    image: "imgs/S63.jpg",
    text: `With a slightly sad expression the old man says:

    Old man: That’s alright. You must be in a rush. But ah hold on. 
    
    You watch the old soul slowly walk back into the shack, to appear again holding out something for you. 
    
    Old man: Take this for your journey, as a gift and apology for not being of much help at the mountains. `
    ,
    options: [['Take gift', '621']]
  },
  621: { //No option pt2
    image: "imgs/S63.jpg",
    text: `With a slightly sad expression the old man says: 
  
    Old man: That’s alright. You must be in a rush. But ah hold on. 
    
    You watch the old soul slowly walk back into the shack, to appear again holding out something for you. 
    
    Old man: Take this for your journey, as a gift and apology for not being of much help at the mountains. `
    ,
    options: [['Take gift', '63']]
  },
  63: { //No option pt3
    image: "imgs/S63.jpg",
    text: `Old man: Take care, and safe travels young one to wherever you may go. You’re free to stop by any time. 

    The man says with a warm smile.

    He waves you goodbye and closes the door and you make your way to search around the forest more. `
    ,
    options: [['Continue journey', '53']]
  },
  64: { //Yes option
    image: "imgs/S64.jpg",
    text: `The old man gestures you to come in and invites you to sit at a dinner table. 
    
    He then walks towards and works away in the kitchen. At a quick glance around your surroundings, you notice the shack you’re in is one big room. 
    
    It’s quaint and has a homey atmosphere. 

    The smell of chicken slowly fills the room, and you feel and hear your stomach growl.`
    ,
    options: [['Talk to old man', '65']]
  },
  65: { //Yes option pt2
    image: "imgs/S65.jpg",
    text: `The old man chuckles. 
 
    Old man: I haven’t had a guest over in ages! 7 years to be exact.  
    
    Due to the nuclear war 5 years ago, I'm the only one that’s alive out of my family that were caught in the radiation. There’s not much people around either - who are friendly anyway.  
    
    He makes his way towards you holding two bowls, and places one in front of you. He then sits beside you with his own bowl. `
    ,
    options: [['Inspect food', '66']]
  },
  66: { //Yes option pt3 HEALTH FIX
    image: "imgs/S66.jpg",
    text: `You inspect the soup with a bit of wary: it smells of chicken and has corn and pasta. 

    Your mouth waters a little. 
    
    Old man: It’s just canned chicken soup, macaroni pasta, and veg and chicken stocks cubes. It’s not much but I hope you enjoy it.
    
    You take a spoonful, and before you know it the soup is reduced to atoms. 
     
    You feel your strength and energy come back to you. You replenish 20 health. `
    ,
    options: [['Talk with old man', '67']],
    health: [10,30]
  },
  67: { //Yes option pt4
    image: "imgs/S67.jpg",
    text: `You and the old man talk for a while. You learn his name is Linus. He speaks of the overground world you were never part of before and how he’s survived this far, and you acknowledge him of yourself, your name and that you’re an underground settler, born and raised. 

    You also tell him you’re delivering a package and that you’re looking for a gas station with a pole sign which reads ‘Pump & Munch’. 
    
    Linus: I think I might have seen that gas station over yonder a few months ago. Past a desert. It’s quite a walk. 
    
    There is also another gas station somewhat close to my shack. You might find something of use there.  
    
    Linus stops in thought for a moment. 
    `
    ,
    options: [['Ask about gas station', '68']]
  },
  68: { //Yes option pt5
    image: "imgs/S68.jpg",
    text: `Linus: I remember there was a garage door in the settlement. 
    
    It’ locked with a keypad. I was told the code once, but I can’t remember what it was, nor could I bother now to find out. 
    
    The first 2 digits might be ‘19'. It might be in your best interest to figure it out. `
    ,
    options: [['Thank Linus', '69']]
  },
  69: { //Yes option pt6
    image: "imgs/S69.jpg",
    text: `After a little while longer you take a look outside to see the sky filled with the colours orange, pink and purple. The sun is setting. 

    You tell Linus you’ll be off now and that you’ll investigate the nearby gas station. The man is a kind old soul, and you don’t want to overstay you’re welcome. 
    
    He nods and offers to refill your water bottle and hands you a can of food to take, before letting you out the door. 
    
    Linus: It was nice meeting you NAME, you're free to stop by any time after your delivery. Take care on your travel. 
     
    He says with a warm smile.  
    
    You wave back and continue on your journey to find that nearby gas station in question before dark. `
    ,
    options: [['Continue your journey', '53']]
  },
  // IF OLD MAN ROBBED
  70: { // CONTINUE ALONG RIVER 
    image: "imgs/S61.jpg",
    text: `Walking around the shack, you notice some vines and leaves growing at its sides and patches of uncut grass at the front door. 
    
    Generally, however, it seems quite well kept. You then decide to peer into one of the windows. 
    
    The room you look into is dark and dully lit by light making its way through other windows, and you can vaguely make out there’s furniture; a fireplace, and a chair and small table stand nicely positioned at its front. 

    It seems someone lives here, but judging by the overgrown greenery around the shack, they haven't been back to it in a while.`
    ,
    options: [['Break in', '72'], ['Walk past the shack', '71']]
  },
  71: { // Walk past shack
    image: "imgs/S48.jpg",
    text: `You decide it’s best to leave the shack be. 
    
    You don’t know if the habitant may be inside or if they might come back soon. 
    
    So, you decide to continue your search around the forest more. `
    ,
    options: [['Contine your journey', '53']]
  },
  72: { // Break in
    image: "imgs/S64.jpg",
    text: `You look at what’s in your surroundings that could be of use and find a rock.  

    You smash the window, making an opening big enough for you to fit through, then cautiously peer inside.  `
    ,
    options: [['Enter shack', '730']]
  },
  73: { // Enter shack
    image: "imgs/S73.jpg",
    text: `No one is there, and you notice that inside the shack is one big room. You pull yourself inside to investigate. 

    Light reflects through the windows just enough to see what’s in the room now. You are accompanied by light rays and shadows. 
     
    You bring yourself to what looks like a kitchen and check what’s in the cabinets, stealing some cans of food and stuffing it in your bag for upcoming days.  
    
    You find a small med kit in one of the bottom cabinets and gain back 10 health.  `
    ,
    options: [['Use medkit', '74']]
  },
  730: { // Use medkit 
    image: "imgs/S69.jpg",
    text: `Your water bottle is also refilled at the sink. There’s a fridge but you don’t bother to look in it; chilled food won’t last long if you take it with you. 

    Nothing else around the room takes your interest but you walk towards the side table against the chair you saw previously to see that there’s a picture frame at the top. 
    
    You see two people, who you can assume are parents standing beside their son? A younger familiar man wearing a black trench coat and sporting a joyous smile. 
    
    You feel you’ve overstayed your visit, feeling a chill down your spine. The atmosphere in the room feels different, and it’s darker than it was before. In the event the habitant returns, you take your leave. 
     
    You make your way to search around the forest more to try and find a place to camp and rest. The sky is painted in darkened tones as the sun begins to set. `
    ,
    options: [['Continue your journey', '53']],
    Damage: [-10],
    karma: [20, 30]
  },
  // END OF IF 
  74: { // Fishing mingame failure - fall in river
    image: "imgs/S73.jpg",
    text: `Waking up in a panic and a shortness of breath, you find yourself in a well-lit room, it appears to be a cabin, tidy and with several beds lined up in a row.  

    After getting your bearings you try to get up, but your legs seem weak.   
    
    The door opens quietly, and you notice a figure come into the room. The smell of soup fills the air.  
     
    Unkown man: Hey, you’re awake. You’re lucky we found you. You were washed up laying by the riverside. Your bag if belongings are set to the side of your bed there, it hasn’t be touched. 
     
    He points. 
    `
    ,
    options: [['Look at point', '75']],
  },
  75: { // Look at point
    image: "imgs/S66.jpg",
    text: `Unknown man: ..and we took your clothes and washed them, so what you're wearing is clean and dry now. We also refilled your water bottle. 
    
    You’re free to stay the night here - it doesn’t look like you’re in any condition to walk anyway.  

    Lee: My name is Lee. I’m one of the heads of this survivor’s camp you found yourself at. If you need anything just let me know. 
    
    Lee sets the soup down in front of you and you begin to demolish the soup in an instant; with no caution at all.  
    
    It tastes of potatoes and…chicken?  
    `
    ,
    options: [['Finish your soup', '76']],
  },
  76: { // Finish soup - HEALTH FIX
    image: "imgs/S76.jpg",
    text: `To think where they have found a chicken confuses you. Maybe there is a 60ft chicken roaming the countryside as well. 
    
    You wouldn’t be surprised this time. 

    You spend the night at the survivor's camp resting in the cabin. You drink your refilled water.  
    
    With sufficient food and water in your body, your health has been replenished by 20 points. 
    
    You soon lay to sleep and dream of a 60ft chicken being roasted over a warm fire during the night. `
    ,
    options: [['Sleep', '777']],
    health: [10,15]
  },
  // END OF DAY 3

  // DAY 4
  // IF GAS STATION
  77: { // Finish soup - HEALTH FIX
    image: "imgs/keypad2_code_hint.png",
    text: `You wake up at the employee lounge in a cold sweat. 
    
    You had a nightmare but you're quick to dismiss it. 
    
    You have to keep going. You drink some water, then get up and pack your things. 

    You heat up another can of food or what’s left from last nights’ can and decide what’s your next course of action will be. `
    ,
    options: [['Attempt to decipher keypad', '78'], ['Leave locked door be', '86']],
  },
  78: { //KEYPAD MINIGAME
    image: "imgs/keypad2_code_hint.png",
    minigame: "keypad2"
  },
  // IF MOTORCYCLE
  79: { // Keypad success
    image: "imgs/S79.jpg",
    text: `You successfully figure out the code for the door and it opens with a loud thud echoing through the empty room. 
    
    You step into the dark as lights turn on one by one. They seem to be activated by motion sensors.  

    In the center of the room lies a pristine motorbike, it looks surprisingly brand new. 
    
    You find the keys on a table nearby as well as a note. The only writing on the note reads: “Treat it with care :)”.  
    
    You should test if it still works. You grab the keys and put it in the ignition and turn it. 
    
    The engine of the motorbike blutters and is loud, but it’s music to your ears. 
    
    You ride it a little back and forth in the garage to get the hang of how it works, then walk towards the garage door, and you struggle, but manage to unlock and lift the garage door open. `
    ,
    options: [['Bring motorcycle outside', '80']],
  },
  80: { // Bring motorcycle outside
    image: "imgs/S80.jpg",
    text: `You walk back and stand outside with the motorbike and equipment ready, until you were abruptly interrupted by an elder man who approaches you suddenly. 
    
    You don’t know where he came from or how he got here, but you notice he sports a similar appearance to the man at your destination. Odd. 

    Unknown Elder Man: Hey, I know you have the package. The package is for me, could you hand me it? `
    ,
    options: [['Hand the man the package', '81'], ['Open the package', '999'], ['Dont hand him the package', '82']],
  },
  81: { // Hand the man the package
    image: "imgs/S81.jpg",
    text: `You hand the man the package and he smiles and says thank you.
    
    You ask for your payment when suddenly he pulls a massive revolver out of his pocket.
    
    Before you can utter another word, he shoots you and you die.
    
    Better luck next time`
    ,
    options: [['Game Over', '1000']]
  },
  82: { // Dont hand the man the package
    image: "imgs/S80.jpg",
    text: `The man's expression quickly changes to be deadpanned and unamused. 

    Unkown Elder Man: Fine.  
    
    Unkown Elder Man: You thought through my ruse. I’m not the guy and I'm nor apart of the camp, but I’ve been told that package holds something incredibly valuable. 
     
    The elder man whips out and aims a gun at you. 
     
    Unknown Elder Man: Give me the package. Or I'll shoot. 
     
    You don’t have enough time and it’s risky to take out your revolver, so you decide to test your luck with a different plan and act quickly. 
    
    Your strength has been regained from the previous night, and so had your agility, and you get around the man fast enough to make him lose balance and knock him out. `
    ,
    options: [['Tie him up', '83']]
  },
  83: { // Tie him up
    image: "imgs/S83.jpg",
    text: `TYou drag him round the side of the gas station and tie him to a pole with vines you find nearby in the forest and let out an exhausted sigh. 

    After the odd encounter, you get back to what you were doing, putting on the helmet and gloves and ready yourself on the bike. 
    
    You press your foot against the gas and set off towards the desert. `
    ,
    options: [['Ride towards the desert', '84']]
  },
  84: { // Motorcycle at desert
    image: "imgs/S84.jpg",
    text: `Finally arriving at the desert, you stop along the road and remove your jacket due to the scorching heat. 
     
     Unfortunately, your motorcycle has run out of fuel, and you will need to continue your journey on foot.  

     You gather your belongings and head off in the direction of a town you spotted in the distance. 
     
     You turn around, glancing at the beast that brought you here before shedding a tear and wandering towards potential civilization. `
    ,
    options: [['Head into town', '106']]
  },
  //  End of motorcycle + gas station

  // IF WALK / FAIL KEYPAD
  85: { // keypad exit / fail
    image: "imgs/S5.jpg",
    text: `Frustrated, you stop trying to decipher the keypad and decide to do something else. 

      You return to the employee lounge. You have already investigated the gas station thoroughly on the previous day and think to yourself what you should do. `
    ,
    options: [['Attempt keypad', '78'], ['Leave the locked door be', '86']]
  },
  86: { // Leave the locked door be
    image: "imgs/S80.jpg",
    text: `You thought to yourself that you shouldn’t spend so much time here and made the quick decision that you’ll continue to the desert on foot. 
      
      As you made your way out the gas station to leave, you were caught in surprised by an elderly man who approaches you abruptly out of nowhere.  

      You don’t know where he came from or how he got here, but you notice he sports a similar appearance to the man at your destination. Odd. 

      Unknown Elder Man: Hey, I know you have the package. The package is for me, could you hand me it? `
    ,
    options: [['Hand him the package', '82'], ['Open the package', '999'], ['Dont hand him the package', '87']]
  },
  87: { // Dont hand him the package
    image: "imgs/S80.jpg",
    text: `The man's expression quickly changes to be deadpanned and unamused. 

      Unkown Elder Man: Fine.  
      
      Unkown Elder Man: You thought through my ruse. 
      
      I’m not the guy and I'm nor apart of the camp, but I’ve been told that package holds something incredibly valuable. 
       
      The elder man whips out and aims a gun at you. 
       
      Unknown Elder Man: Give me the package. Or I'll shoot. 
      
      You don’t have enough time and it’s risky to take out your revolver, so you decide to test your luck with a different plan and act quickly. 
      
      Your strength has been regained from the previous night, and so had your agility, and you get around the man fast enough to make him lose balance and knock him out. `
    ,
    options: [['Tie him up', '88']]
  },
  88: { // Tie him up
    image: "imgs/S88.jpg",
    text: `You drag him round the side of the gas station and tie him to a pole with vines you find nearby in the forest and let out an exhausted sigh. 

      You continue off on your journey and begin to walk away from the gas station, taking the road to guide you. 
      
      The ground feels different compared to the grass and mud you’ve been stepping through, but the change is appreciated.   
      
      You took a deep breath and anticipate the tiresome walk ahead and you walk for hours. `
    ,
    options: [['Keep walking', '89']]
  },
  89: { // Keep walking - TIMER MINUS 30 
    image: "imgs/S89.jpg",
    text: `Walking through the desert took sheer force and will to get through, and you're drenched with sweat from the walk and the heat of the scorching sun.  

      Upon looking up in front of you, you see in the distance a town which you hope isn’t an illusion. 
      
      It takes the last of your remaining energy to haul yourself there.  `
    ,
    options: [['Head into town', '106']],
    damage: [10, 15]
  },
  // END OF IF WALK / FAIL KEYPAD

  // IF SURVIVOR CAMP
  777: { // Sleep
    image: "imgs/S93.jpg",
    text: `It’s the next day you wake up to the long-missed feeling of comfort of laying on a mattress and feeling a soft pillow on your head. 

      You’re back to your senses. 

      In sudden panic and unease, you quickly grab your bag and immediately check for the package and its condition. 

      Phew. 

      The package is still there and is surprisingly safe and dry. Its packaging could most likely be waterproof you realise in momentary shock and chuckle in relief. How convenient.  `
    ,
    options: [['Check bag', '90']],
  },
  90: { // Check bag
    image: "imgs/S90.jpg",
    text: `You check your bag’s other compartments, and your revolver and other belongings are also still there. 
 
      You calm and compose yourself, take your bag and decide to get up and out of the cabin to investigate the new environment.  
      
      You step out to be greeted to a lively small campsite, bustling and loud. There are quite a few people: elders, adults, teens in different circles and children running around giddy and happy. 
      
      String lights softly glow and hang from pole to pole above you. `
    ,
    options: [['Look around', '91']],
  },
  91: { // Look around
    image: "imgs/S91.jpg",
    text: `You see Lee at the middle of the site, and you walk up to chat with him. 
      
      You thank him, then introduce yourself and explain embarrassingly how you were in the river in the first place. He lets out a chesty chuckle. 
 
      You chat longer and walk up and talk to the other residents in the area and learn that they as a group have moved to the location only a few months before. 
      
      They usually move from one location to another to avoid robbers and unknown beasts that roam the same ground you stand on. 
      
      They are all people who have met coincidently (like how you ended up here) and have grouped and worked together to survive.`
    ,
    options: [['Ask about where you are', '92']],
  },
  92: { // Ask about where you are
    image: "imgs/S92.jpg",
    text: `As for your location, you were swept down the river to the North-East and are told that a desert isn’t too far from here. 
 
      You enjoy the chat and abundance of stories you were told of what it’s like to live up on the surface and, you tell a few of your own, in the underground settlement, some of your adventures till now, and where you’ll need to be headed next. 
       
      To take a break you move to a smaller area to overlook the camp. The survivors seem like nice people.
      
      Your thoughts were abruptly interrupted by an elder man who approaches you suddenly. 
      
      You don’t think you’ve seen him around earlier at the camp and, you notice, he sports a similar appearance to the man at your destination. Odd. 

      The man smiles. 

      Unknown Elder Man: Hey, I know you have the package. The package is for me, could you hand me it? `
    ,
    options: [['Hand the man the package', '82'], ['Open the package', '999'], ['Refuse the old man', '93']],
  },
  93: { // Refuse the old man
    image: "imgs/S93.jpg",
    text: `The man's expression quickly changes to be deadpanned and unamused. 

      Unkown Elder Man: Fine.  
      
      Unkown Elder Man: You thought through my ruse. I’m not the guy and I'm nor apart of the camp, but I’ve been told that package holds something incredibly valuable. 
       
      The elder man whips out and aims a gun at you. 
       
      Unknown Elder Man: Give me the package. Or I'll shoot. 
      
      You don’t have enough time and it’s risky to take out your revolver, so you decide to test your luck with a different plan and act quickly. 
      
      Your strength has been regained from the previous night, and so had your agility, and you get around the man fast enough to make him lose balance and knock him out.`
    ,
    options: [['Tie him up', '94']],
  },
  94: { // Tie him up
    image: "imgs/S100.jpg",
    text: `You drag him further away from the camp and tie him to one of the poles with hanging lights with vines you find nearby around you in the forest. 
 
      You wipe your sweat and let out an exhausted sigh and make your way back to the camp.   
      
      You figure you need to set off soon but before you plan to tell Lee, a child from the camp approaches you with tears in his eyes. 
      
      He wants to ask you for a favor. Sniffling, he tells you that he had dropped his beloved bear stuffed toy down a ravine near the camp site.
      
      No one had been brave enough to go down to get it and you have heard rumors that a beast resides there. 
      
      You’re the child’s only hope. `
    ,
    options: [['Help the child', '97'], ['Dont help the child', '95']],
  },
  // DONT HELP CHILD  
  95: { // Dont help the child
    image: "imgs/S100.jpg",
    text: `You tell the boy that unfortunately you can’t help him get it back. You don’t want any other risks to your life currently, as you’re still emotionally impacted by your previous one. 

      Instead, you stay for a bit at the camp to show your gratitude for the hospitality and kindness the residents of the campsite have been to you. 
      
      You helped them in other ways: farming, cleaning, and watching over the kids.  
      
      You also secretly hand the boy who lost his bear earlier a small makeshift sewn bear out of ripped cloth from your clothing and pillow stuffing taken discreetly taken from your pillow at the cabin. 
       
      The boy gives a small faint smile upon receiving it and hugs it tightly in appreciation. 
      `
    ,
    options: [['Head over to Lee', '96']],
  },
  96: { // Head over to lee
    image: "imgs/S96.jpg",
    text: `It’s time to go and you go to find Lee. You talk and thank him once more for everything. 

      Lee: NAME you’re always welcome to stop by anytime while we’re here. It was a pleasure to meet you and have a safe trip to your destination. 
      
      Lee grins and holds his fist out and you fist bump him. 
      
      As you leave the other residents come up to wave their goodbyes and some shout too; their wishes that you take care and come back soon again to visit. 
      
      Children also scream goodbye and exaggerate their waves. 
      
      You wave everyone goodbye and leave with a warm smile. 
      
      You continue your journey heading back in track to North on foot to the desert. `
    ,
    options: [['Walk to desert', '89']],
  },
  // END OF DONT HELP CHILD

  // HELP CHILD
  97: { // Help child
    image: "imgs/S97.jpg",
    text: `You ask the boy for his name, and you reassure him you’ll get his bear stuff toy back. 

    As you make your way back to the camp central you walk up to Lee and tell him about the boy Elliot and your plan to get his bear back. 
    
    Equipment has been gathered for you: some rope, a helmet, and an ice axe. You also bring your bag which has your flashlight and revolver which may come in handy, as well as have the package for safekeeping after what happened in your last encounter. 
    
    Elliot brings you to the ravine. The ravine is massive, deep and stretches out through the ground and forest floor. You get your equipment ready and tie the rope to a sycamore tree, the tie the rope around yourself, and make your way down. 
    
    Elliot: Please be safe! `
    ,
    options: [['Head further into ravine', '98']],
  },
  98: { //SHOOT BEAR MINIGAME
    minigame: "minigame_1_bear"
  },
  99: { // If bear minigame fail
    image: "imgs/S4.png",
    text: `The 60ft bear lashes out at you with its massive claws and you’re fatally hit. 
    
    You die from blood loss. `
    ,
    options: [['Game Over', '1000']],
  },
  100: { // If bear minigame success
    image: "imgs/S100.jpg",
    text: `The 60ft bear slain and the beloved worn-out stuff bear is safely obtained and placed in your bag. 
    
    The stuff toy is quite ironic. You make your way up the ravine with the rope and ice axe. 
    
    As you made it up you move to the side and away from the ravine and Elliot follows. 
    
    He looks up at you with anticipating inquisitive eyes, and you take the bear from the bag and place it in his arms. 
    
    He has the happiest and widest smile, and he sniffily hugs you. `
    ,
    options: [['Head back to camp', '101']],
  },
  101: { // Head back to camp - NAME FIX?
    image: "imgs/S102.jpg",
    text: `You talk to Lee and tell him you’ll need to head out now to continue your delivery. 

    You check if you have all your belongings back at the cabin and as you were about to leave, a woman walks up to you. You remember that she’s Elliot’s mum. 
    
    Elliot’s mother: Hi NAME! Thank you so much for getting my son’s stuff bear back; he loves it to death and is about the only thing he owns, so it means so much him and me.  
    
    You need to get to the Desert, right? Would you like me to drive you there in return as thanks from us? `
    ,
    options: [['Accept offer', '104'], ['Decline offer', '102']],
  },
  // DECLINE OFFER
  102: { // Decline offer - NAME FIX
    image: "imgs/S96.jpg",
    text: `You insist and decline the offer, not minding walking the way instead. 

    Elliot’s Mother: Ah well that’s okay. I give my greatest thanks and wish you a safe trip NAME. 
    
    She warmly smiles and walk away to Elliot who was waiting patiently outside and holds his hand going off somewhere in the camp and vaguely hears them talking about dinner their father is making. 
    
    It’s time to go and you go to find Lee. You talk and thank him once more for everything. 
    
    Lee: you’re free and always welcome to stop by anytime while we’re here. It was a pleasure to meet you and have a safe trip to your destination. 
    
    Lee grins and holds his fist out and you fist bump him. `
    ,
    options: [['Go to leave camp', '103']],
  },
  103: { // Go to leave camp
    image: "imgs/S102.jpg",
    text: `As you leave the other residents come up to wave their goodbyes and some shout too; their wishes that you take care and come back soon again to visit. 
    
    Children also scream goodbye and exaggerate their waves. 

    You wave everyone goodbye and leave with a warm smile. 
     
    You continue your journey heading back North on foot to the desert. `
    ,
    options: [['Walk to desert', '89']],
  },
  // END OF DONT ACCEPT OFFER

  // ACCEPT OFFFER
  104: { // Accept offer
    image: "imgs/S104.jpg",
    text: `You accept the offer, and she tells you to be at the camp central when you're ready. 
    
    You continue to pack your things up and make your way there. 
    
    You find Lee and let him know that you’ll be going and driven to the desert, and he says he’ll tag along. 

    You hop in the car and place your belongings down and see Elliot’s mum and Lee already inside. 
     
    You soon leave the other residents come up to wave their goodbyes and some shout too; their wishes that you take care and come back soon again to visit. 
    
    Children also scream goodbye and exaggerate their waves. 
    
    You wave everyone goodbye and with a warm smile you’re driven off to the desert. `
    ,
    options: [['Arrive at desert', '105']],
  },
  105: { // Arrive at desert
    image: "imgs/S89.jpg",
    text: `You arrive at the desert, and Elliot’s mum pulls in alongside a pitstop. She turns towards you. 

    Elliot’s mother: This is as far as I can take you, hopefully you make your delivery on time!  
    
    Lee speaks up after. 
    
    Lee: NAME you’re always welcome to stop by anytime. It was a pleasure to meet you and have a safe trip to your destination. 
    
    Lee grins and holds his fist out and you fist bump him. 
    
    You gather your belongings and get out of the car. You turn to wave them goodbye as they set off. 
     
    You hear the car honk, and you turn in the direction you saw a town in and make your way there. Hopefully it’s not abandoned. `
    ,
    options: [['Head into town', '106']],
  },
  // END OF ACCEPT OFFER 
  // END OF HELP CHILD
  // End of if survivor camp

  // AT DESERT TOWN FIX FIX
  106: { // IN desert town
    image: "imgs/S106.jpg",
    text: `You arrive at the town after your long walk and journey on the sand. You’re exhausted.  
 
    You look around and it appears that there are no settlers here, but you see that the town is much larger than the one you’ve seen previously. 
    
    You inspect around one side of the town, and most if not all the buildings are empty, abandoned and falling apart. 
    
    To your surprise however, you find a supermarket intact and lit up. You decide to enter through the main entrance and check it out.`
    ,
    options: [['Enter supermarket', '107']]
  },
  107: { // Enter supermarket
    image: "imgs/S107.jpg",
    text: `You enter and see one singular person working there. 
    
    It feels like a bit of an anomaly that the place is quite stocked up, ventilated, and well-lit, well-kept, and also run by seemingly one person. 
    
    You decide not to question it too much. To the left of you is a..Soobway station? They’re handing out free sandwiches and water.  Don’t mind if you do. 

    The person at the front comes to the counter and hands you a Soobway sandwich. 
    
    You inspect it suspiciously, but it is indeed legit and fresh, and you stuff it in your bag and take a cup of water. Drinking water never had felt so satisfying.  
    
    You aren’t interested in any of the products displayed, nor do you have any money, so you look around the supermarket more. 
    
    You spot one other person in the store considering dog medicine products on a shelf. They look up and glance at you and look back down, to then double take and look at you with wide eyes. 
    `
    ,
    options: [['Leave supermarket', '108']]
  },
  108: { // Leave supermarket
    image: "imgs/S108.jpg",
    text: `You feel weirded out by their reaction and make your way to leave, and as you were about take a step out the door - the guy loudly shouts,

    Unknown adult man: Hey you! Stop there!! I know who you are. My dad was looking for you and that precious package you’re delivering. I don’t know where he is now. 

    Son: So, I come to take his place and get revenge.  

    You both walk out of the supermarket, and he pulls out a shotgun and menacingly points it at you.  

    Son: Give me the package. Or fight me. 

    It doesn’t look like he can be reasoned with. You take out your revolver from your bag and ready yourself. 
    `
    ,
    options: [['Get ready', '109']]
  },
  109: { //Shootout with son minigame
    minigame: "minigame_1_son"
  },

  1002: { // Shoot out mingame success IF GAS STATION ROUTE - CONDITION
    image: "imgs/S69.jpg",
    text: `The guy falls to the ground and pants. 
    
    You’ve inflicted him quite a bit, but not to the point of death. 

    You tell the man that his father is tied up to a pole at a gas station near the forest. 
    
    He scoffs before falling unconscious. 
    
    You drag him away from the entrance and tie him up to a lamp pole near the supermarket with rope you found lying around and continue on your way around town.  
    
    You inspect and walk around the other side of the town and find yourself seeing an inn to your right, and to the left a large lake. 
    
    You have a hunch that Croccy might be there. 
    `
    ,
    options: [['Stop by lake', '111'], ['Go to inn', '112']]
  },
  110: { // Shoot out mingame success IF SURVIOR CAMP - CONDITION
    image: "imgs/S69.jpg",
    text: `The guy falls to the ground and pants. 
    
    You’ve inflicted him quite a bit, but not to the point of death. 

    You tell the man that his father is tied up to a pole near the Overground Survivor’s Camp. He scoffs before falling unconscious.     
    He scoffs before falling unconscious. 
    
    You drag him away from the entrance and tie him up to a lamp pole near the supermarket with rope you found lying around and continue on your way around town.  
    
    You inspect and walk around the other side of the town and find yourself seeing an inn to your right, and to the left a large lake. 
    
    You have a hunch that Croccy might be there. 
    `
    ,
    options: [['Stop by lake', '111'], ['Go to inn', '112']]
  },
  // END OF DESERT TOWN
  111: { // Stop by lake
    image: "imgs/S111.jpg",
    text: `You decide to head towards the lake in curiosity to see if your old friend is there.  

    You approach the lake. It spreads wide across a valley and the atmosphere is gloomy, though peaceful and still. The air smells fresh for once. 

    Out of the corner of your eye, you notice close by you in the lake that something green emerges and is poking out of the water. You see a pair of eyes looking up at you. 

    You look closer to inspect it. Before you can react, the beast rapidly leaps out at you and grabs you by its jaws. 

    It’s a massive 60ft crocodile yes; but this one was not Croccy. 

    Its teeth dug into you, you couldn’t escape, and you’re brought into and submerged in the water.  

    You were attacked and gobbled up by Croccy’s relative. You should be more careful next time.  
    `
    ,
    options: [['Game Over', '1000']]
  },
  112: { // Go to inn
    image: "imgs/S112.jpg",
    text: `You decide to head towards the inn.  

    As you walk, the sky above you fall into gentle warm colours as the sun sets. 
     
    It’s becoming evening and nearing the end of your fourth day, and you start to worry you won’t make it to the gas station, until you look up and out in front of you. 
    
    You squint but at a distance past the inn you see that there is a tall faintly lit pole near to an establishment beside it. You decide you’ll check it out tomorrow with a feeling that, that place might be it. 
    
    Your energy is depleted as you approach the inn, and you see a sign at its entrance which reads: “Free inn; make yourself at home – please clean up after yourself. Or else.” 
    
    You check the inside oof the inn out and it’s empty of people. You take one of the vacant rooms and lock it. The room you entered is simplistic and small, but homey, housing a bed by a window, a round table and a singular chair.   
    
    You decide to sleep here for the night.  
    
    Your destination might be a short distance away and if it is the place, you’ll make it in time by the 5th day.   
    `
    ,
    options: [['Sleep', '113']]
  },
  // End of day 4

  // DAY 5
  113: { // Sleep
    image: "imgs/S113.jpg",
    text: `Today’s the 5th day, and the rising sun greets your eyes through the window. It’s morning and you wake up feeling energised; you slept well. 

  Getting up, you tidy your short-lived space in slight fear of what the sign at the front of the inn entails if you fail to do the task. You make the room look as good as new, and leave the inn and set off to your place of interest you saw yesterday. 
  
  Heading towards and closer to the pole and establishment, you can vaguely make out that the pole is a sign which reads:  Pump & Munch. 
  
  It’s the home stretch. 
  `
    ,
    options: [['Head to final destination', '114']]
  },
  114: { // Head to final destination
    image: "imgs/S114.jpg",
    text: `Suddenly however, something appears before you and blocks your way. 

    It’s a 60ft dog, and to your surprise someone was on its back and drops down to the ground to stand in front of you and face you. 
    
    He wears a gas mask and takes it off before then speaking. 
    
    Unknown guy: Oi. You’re the person delivering the package, right?  
    
    He has a threatening tone. 
    
    Unknown guy: What you’ve done to my grandfather and father is embarrassing to our family rep. I’ve come to take revenge on their behalf. And take that stupid package. 
    
    Grandson: I’ll send my dog at you. To let you know bullets won’t work this time on him.  
    
    You better be prepared. 
     
    You’re not surprised this time, but are impressed with the whole family lineages’ dedication, you have to admit. 
    
    You look to the dog and observe it. It gives out faint whimpers and foams and drools from the mouth. Poor thing. 
    
    You thought to yourself that the radiation poisoning has really done harm to the animals, altering them to a 60ft state; and this dog got the worst end of it you’ve seen so far. `
    ,
    options: [['Begin to fight', '116']]
  },
  116: { // Begin to fight - IF CROCCY
    image: "imgs/S116.jpg",
    text: `You’re out of ideas to beat the guy and his dog, until Croccy appears out from nowhere and stays by your side. 
    
    Croccy looks at you, then to your aggressor.  

    Looking at the grandson’s face, the guy is in utter shock, but shakes his head and quickly composes himself. 
    
    Grandson: Haha. Get ready deliverer. 
     
    Showdown between the 60ft beasts commences. `
    ,
    options: [['Start batle', '117']]
  },
  117: { // Start battle
    image: "imgs/S117.jpg",
    text: `The Dog looks like he’s coming for an attack to Tackle Croccy.  

    What should Croccy do? `
    ,
    options: [['Chomp', '118'], ['Dodge', '119'], ['Tail Whip', '120']]
  },
  // S1
  118: { // Chomp
    image: "imgs/S118.jpg",
    text: `The Dog harshly hits into Croccy with full force, and Croccy retaliates and chomps into the Dog’s neck.  

            The Dog got injured by the bite, and Croccy got injured twice by the tackle impact and radiation that’s in the Dog’s blood. 
            
            The Dog is panting and stays still standing to recover its composure. Here’s your chance to strike, what should Croccy do?`
    ,
    options: [['Claw Slash', '121'], ['Tail Whip', '122'], ['Chomp', '123']]
  },
  119: { // Dodge
    image: "imgs/S119.jpg",
    text: `The Dog leaps to tackle, but Croccy is faster and manages to dodge the attack. 
            
            The Dog ends up throwing itself on the ground and injured himself. 
            
            The Dog wobbles and manages to get up.  
            
            The Dog is panting and stays still standing to recover its composure. Here’s your chance to strike, what should Croccy do?`
    ,
    options: [['Claw Slash', '121'], ['Tail Whip', '122'], ['Chomp', '123']]
  },
  120: { // Tail whip
    image: "imgs/S121.jpg",
    text: `Croccy uses his tail, stopping the Dog in his tracks and whips him back with full force. 
            
            The Dog is taken aback and flies across the ground harshly. 
            
            The attack was super effective! 
            
            The Dog is panting and stays still standing to recover its composure. Here’s your chance to strike, what should Croccy do?`
    ,
    options: [['Claw Slash', '121'], ['Tail Whip', '122'], ['Chomp', '123']]
  },
  // S2 ===========================================
  121: { // Claw slash
    image: "imgs/S121.jpg",
    text: `Croccy waddles approaching the Dog swiftly and uses Claw Slash. 
    
    It’s super effective! 
    
    The Dog readies his attack Toxic Cough. 
    
    What should Croccy do?`
    ,
    options: [['Tail whip', '124'], ['Chomp', '125'], ['Claw Slash', '126']]
  },
  122: { // Tail whip
    image: "imgs/S122.jpg",
    text: `Croccy approaches the Dog and uses Tail Whip, but the attack is missed. 
    
    The Dog managed to dodge in time as it noticed Croccy prepare to swing his tail.  
    
    The Dog readies his attack Toxic Cough. 
    
    What should Croccy do?`
    ,
    options: [['Tail whip', '124'], ['Chomp', '125'], ['Claw Slash', '126']]
  },
  123: { // Chomp 
    image: "imgs/S116.jpg",
    text: `Croccy approaches, opens his maw wide and bites into the Dog’s tail and throws him across the ground. 
    
    The attack wasn’t very effective, however still had manages to injure the Dog. 
    
    Croccy is a bit injured in the process due to radiation that’s in the Dog’s blood.  
    
    The Dog readies his attack Toxic Cough. 
    
    What should Croccy do?`
    ,
    options: [['Tail whip', '124'], ['Chomp', '125'], ['Claw Slash', '126']]
  },
  // S3 =============================================
  124: { // Tail whip
    image: "imgs/S121.jpg",
    text: `You tell Croccy to use Tail Whip, and as the Dog attacks, its attack is subverted with the toxins being swept away as Croccy’s tail whips side to side, and in the process manages to hit the Dog with his tail. 
          
          The attack was super effective! 

          The Dog stays put and coughs up some of his slobber onto his tail. He’s about to execute his range attack Toxic Launch. What should Croccy do? `
    ,
    options: [['Tail Whip', '127'], ['Claw Slash', '128'], ['Dodge', '129']]
  },
  125: { // Chomp
    image: "imgs/S117.jpg",
    text: `You tell Croccy to Chomp, and he readies his maw and goes in for the bite. 
          
          The attack fails as Croccy is momentarily blinded from the toxins and pulls back. 
          
          Croccy is injured a little from the attack. 
          
          The Dog stays put and coughs up some of his slobber onto his tail. He’s about to execute his range attack Toxic Launch. What should Croccy do? `
    ,
    options: [['Tail Whip', '127'], ['Claw Slash', '128'], ['Dodge', '129']]
  },
  126: { // Claw Slash
    image: "imgs/S122.jpg",
    text: `You tell Croccy to use Claw Slash. 
          
          Croccy rushes forward and manages to execute the attack, injuring the dog, however, he also injures himself in the process as he had gone through the toxins. 
          
          The Dog stays put and coughs up some of his slobber onto his tail. He’s about to execute his range attack Toxic Launch. What should Croccy do? `
    ,
    options: [['Tail Whip', '127'], ['Claw Slash', '128'], ['Dodge', '129']]
  },
  // S4 ===================================================
  127: { // Tail whip
    image: "imgs/S121.jpg",
    text: `You tell Croccy to use Tail Whip and he braces himself for the oncoming flying toxic slobber. 
          
    You manage to subvert the attack as Croccy whips the slobber with his tail out of the way, smashing and breaking it apart into tiny particles. 
    
    The toxins however fall onto him and Croccy is weakened. 
    
    The Dog prepares his maw and comes at Croccy for his Poison Bite. What should Croccy do?`
    ,
    options: [['Dodge', '130'], ['Chomp', '131'], ['Claw Slash', '131']]
  },
  128: { // Claw slash
    image: "imgs/S116.jpg",
    text: `You tell Croccy to use Claw Slash. 
    
    Croccy rushes forward and tries to execute the attack, but it fails. 
    
    The Dog sees through the attack, aims his tail and hits the slobber straight onto Croccy’s face. Croccy’s stunned for a second. 
    
    He’s taken a critical hit.  
    
    The Dog prepares his maw and comes at Croccy for his Poison Bite. What should Croccy do?`
    ,
    options: [['Dodge', '130'], ['Chomp', '131'], ['Claw Slash', '131']]
  },
  129: { // Dodge
    image: "imgs/S119.jpg",
    text: `You tell Croccy to dodge as you feel it’s best that he doesn’t get hit by this attack. 
    
    He manages to dodge the attack successfully!  
    
    The Dog prepares his maw and comes at Croccy for his Poison Bite. What should Croccy do?`
    ,
    options: [['Dodge', '130'], ['Chomp', '131'], ['Claw Slash', '131']]
  },
  // S5 =========================================================
  130: { // Dodge
    image: "imgs/S118.jpg",
    text: `Croccy takes a stance and successfully dodges the attack. 
            
            However, the Dog comes back around from behind him and bites into Croccy’s tail. 
            
            Croccy is injured, but due to his own radiated blood, the Dog is also injured. `
    ,
    options: [['End fight', '133']]
  },
  131: { // Chomp
    image: "imgs/S122.jpg",
    text: `Croccy comes headfirst towards the Dog with his Chomp attack and readies his maw. 
            
            Both animals bite into each other, injuring both, but Croccy’s stronger and manages to throw the Dog to the side and hitting its body to the ground harshly. `
    ,
    options: [['End fight', '133']]
  },
  133: { // END FIGHT SUCCESS
    image: "imgs/S133.jpg",
    text: `Croccy makes the final blow and ends the battle. You won and the dog falls to the ground.  

    You give Croccy pats, and he wags his tail before watching you him disappearing heading towards the lake. 
    
    The dog is still conscious and manages to look to its master. The guy is in a panic and doesn’t know what to do as you walk towards him. 
    `
    ,
    options: [['Feed dog soobway sandwich', '134']]
  },
  134: { // Feed dog soobway sandwich
    image: "imgs/S134.jpg",
    text: `He closes his eyes out of fear, until he opens them again to be greeted with the sight of you standing in front of his dog. 
    
    You hand the dog the soobway sandwich you got from the supermarket out of pity, and apparently it has healing properties and the dog no longer drools and foams at the mouth. 
    
    It has reduced the effects of the radiation poisoning on him to your surprise.  

    The son is astonished and runs up quickly to his dog and hugs it. He turns to you with a tear in his eye.  
    
    Son: Thank you for healing my dog. My family has been trying to find medicine to cure him or at least reduce his pain for ages. You’re free to go, I don’t care about my family rep and I'll get my family members later.  
     
    He goes back to hugging his dog and gives him pets. You breathe out with a smile and leave the two to continue making your way to the gas station. 
    `
    ,
    options: [['Continue to gas station', '135']]
  },
  135: { // Feed dog soobway sandwich
    image: "imgs/S135.jpg",
    text: `It’s the early evening and you finally reach the gas station. You spot the guy who meets the description leaning their back on a fuel pump. He looks up and speaks to you. 

    Red Trapper Hat Guy: So, you’ve made it deliverer. Must say I congratulate you for making it here – it must’ve been quite a tough journey. I'll tip you a generous amount as thanks. Can you hand me the package?  
    
    You take out the package from the bag. It’s in good condition and you place it in the hands of the man. `
    ,
    options: [['Talk to man', '998']]
  },
  // END OF DAY 5

  // ENDINGS
  999: { // Open package ending 
    image: "imgs/S9.jpg",
    text: `You open the package to find a PACKAGE, you realise that this wont help you in your situation.
  
  The old man laughs and shoots you.

  You begin to bleed out.

  The old man walks away.

  It seems it is the end for NAME.
  `
    ,
    options: [['Game Over', '1000']]
  },
  998: { // Win game
    image: "imgs/S998.jpg",
    text: `You were able to glance that the man has a nametag. 
    
    His name is Ewan. He decides to open the package in front of you to reveal that held inside it was a PACKAGE. 
    
    You feel yourself die inside a little. 

    He goes to take a bite out it. 

    Ewan: its a bit stale. 
    
    The End. Congrats on delivering your first package! 
    `
    ,
    options: [['Game Over', '1001']]
  }
}
