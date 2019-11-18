
exports.seed = (knex, promise) => {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        {CharacterId: 1, 
          characterName: 'Akuma', 
          pP: 'qq', 
          origin: 'Unkown (presumably Japan)', 
          bloodType: 'Uknown', 
          height: 178, 
          weight: 102, 
          likes: 'Martial Arts, Training, Raging Demon, Satsui no Hadou, Fighting Evil Ryu, Strong Opponents, Becoming stronger.', 
          dislikes: 'Gouken, Anyone who interferes with his training, Goutetsu', 
          fightingStyle: 'Satsui no Hadou-infused ansatsuken art.', 
          story: "Akuma and his brother Gouken were students of Goutetsu. Goutetsu taught a nameless martial art, which incorporates elements of Karate, Judo, and Kempo. He also taught the Shun Goku Satsu (literally “Instant Hell Murder”) also known as the “Raging Demon”, a technique which, although incredibly powerful, puts the user in considerable danger. As the brothers progressed under Goutetsu's tutelage, a dispute arose on the true nature of their fighting style and the path to master it. Gouken, unable to accept the dark nature of his fighting style and only wanted to embrace the peaceful and spiritual aspect of the art, left Goutetsu after he had completely finished his training to begin his own dojo, Goutetsu even allowed him to build his dojo and was even proud,for wanting to pass down the art to others. Akuma on the other hand, continued to use the dark side of their martial art and vowed to use their fighting style as it was intended in order to become stronger.", 
          personality: "Akuma is a seemingly brutal, angry, quite honorable and proud warrior who enjoys training and has contempt for true weaklings. He is rarely seen smiling and enjoys fighting formidable warriors, such as Ryu. He also hates it when somebody actually interferes with his training. He is also quite serious in fighting and enjoys getting stronger. In his conversations with many warriors, he tends to talk about their fists and his own. He truly hates Gouken for not using their fighting style in the way that it is intended to be used, and hates him even more for sealing off the Satsui no Hadou in Ryu from taking over him. He is also very independent and fights alone. Akuma's personality is very dark and negative towards other people, he believes that abandoning all positive emotions and fighting with rage and hate is the way all warriors should battle. He sees compassion and caring for others as a weakness. Because of his personality, many warriors do not like him as a person, believing that he only cares about strength and power. One such person is Ryu, who admonishes him for throwing away his own humanity."},

        {CharacterId: 2, 
          characterName: 'Alex', 
          pP: 'qq', 
          origin: 'America', 
          bloodType: 'O', 
          height: 195, 
          weight: 111, 
          likes: 'Training, his family, military, fasion, city life, fighting Ryu, his Backdrop move.', 
          dislikes: 'Those who prey on the weak, annoying people, broccoli, muggers, Gill', 
          fightingStyle: 'Wrestiling and kickboxing', 
          story: "Alex is an American fighter from Manhattan, District of New York, who hasn't been with his parents since they died when he was a young boy. his current family consists of his father's friend, Tom and his teenage daughter, Patricia, who live under the same roof with him. Alex trains daily at Tom's gym, Having learned everything he knows about fighting from Tom himself. Tom, being a military veteran and a renowned refiner of fighting moves, often visits military bases as well as maintaining his own gym.", 
          personality: "Often crass and abrasive, Alex's boldness tends to land him in deep trouble; he is also prone to violent outbursts of extreme aggression, especially if the people he loves are threatened. He is also very straightforward and refuses to mince words, especially when it comes to his confidence in his abilities. At times, this desire to prove himself can overwhelm his common sense, leading to very dangerous situations that test the very limits of his fighting capabilities."},
        {CharacterId: 3, characterName: 'Ibuki', pP: 'qq', origin: 'Japan', bloodType: 'Unkown', height: 162, weight: 60, likes: 'Handsome boys, her pet tanuki, J-Pop, Sakura, Toads', dislikes: "Exams, Guy's uptight way of the ninja, people who try to hurt her friends", fightingStyle: 'Ninjutsu', story: "Ibuki is a young girl from Japan who lives in a village entirely composed of ninjas, hidden from society's watchful eyes, where she has trained in the deadly art of ninjutsu since childhood. After doing the same routine everyday and attending a school for ninjas, she wishes to live like a normal schoolgirl. Her best friend is her classmate, Sarai. Ibuki also has a pet tanuki named Don.", personality: "Even though Ibuki is a well-trained ninja, she is still a normal teenage girl, and states on several occasions that she finds her ninja garments ugly and her daily training strange. She also has a typical interest in boys; in several of her win quotes in Super Street Fighter IV, she evaluates her opponents based on their looks, behavior, and clothing, as well as their fighting performance. She regards Guy in particular as quite a hunk, though she also complains about his non-traditional ninja garb. She has also shown slight interest in others like Blanka and Fei Long. Ibuki is also very conscious about her weight, as mentioned in her Street Fighter × Tekken winquote against Bob and her Arcade mode ending in Street Fighter V."},
        {CharacterId: 4, characterName: 'Makoto', pP: 'qq', origin: 'Japan', bloodType: 'Unkown', height: 154, weight: 55, likes: 'Rindoukan-ryuu Karate, a challenge, Ibuki, Ryu', dislikes: "Being called a boy, not being taken seriously", fightingStyle: 'Rindoukan-ryuu Karate', story: "Ibuki is a young girl from Japan who lives in a village entirely composed of ninjas, hidden from society's watchful eyes, where she has trained in the deadly art of ninjutsu since childhood. After doing the same routine everyday and attending a school for ninjas, she wishes to live like a normal schoolgirl. Her best friend is her classmate, Sarai. Ibuki also has a pet tanuki named Don.", personality: "Even though Ibuki is a well-trained ninja, she is still a normal teenage girl, and states on several occasions that she finds her ninja garments ugly and her daily training strange. She also has a typical interest in boys; in several of her win quotes in Super Street Fighter IV, she evaluates her opponents based on their looks, behavior, and clothing, as well as their fighting performance. She regards Guy in particular as quite a hunk, though she also complains about his non-traditional ninja garb. She has also shown slight interest in others like Blanka and Fei Long. Ibuki is also very conscious about her weight, as mentioned in her Street Fighter × Tekken winquote against Bob and her Arcade mode ending in Street Fighter V."}
      ]);
    });
};
