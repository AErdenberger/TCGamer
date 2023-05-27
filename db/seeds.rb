# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
  require "open-uri"

    puts "Destroying Comments..."
    Comment.destroy_all

    puts "Resetting Comment Ids..."
    ApplicationRecord.connection.reset_pk_sequence!('comments')

    puts "Destroying Users..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'Demo-lition', 
      email: 'demo@user.io', 
      password: 'password'
    )
  
    # More users
    10.times do 
      User.create!({
        username: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end

  end
  puts "Destroying Cards..."
  Card.destroy_all

  puts "Resetting Card Ids..."
  ApplicationRecord.connection.reset_pk_sequence!('cards')

  puts "Creating MTG Cards..."

  MTG_card1 = Card.create!({
   name: "Corrupted Conviction",
   game: "MTG",
   set: "MOM",
   rarity: "Common",
   foil: "false",
   price: "0.20"
  })
  MTG_card1.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/MTG_Cards/mom-98-corrupted-conviction.jpg"), 
    filename: "Corrupted_Conviction.jpg")

  MTG_card2 = Card.create!({
    name: "Mirrodin Avenged",
    game: "MTG",
    set: "MOM",
    rarity: "Common",
    foil: "false",
    price: "0.06"
  })
  MTG_card2.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/MTG_Cards/mom-118-mirrodin-avenged.jpg"),
    filename: "Mirrodin_Avenged.jpg")

  MTG_card3 = Card.create!({
    name: "Mirran Banesplitter",
    game: "MTG",
    set: "MOM",
    rarity: "Common",
    foil: "false",
    price: "0.01"
  })
  MTG_card3.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/MTG_Cards/mom-154-mirran-banesplitter.jpg"),
    filename: "Mirran_Banesplitter.jpg")

  MTG_card4 = Card.create!({
    name: "Ozolith, the Shattered Spine",
    game: "MTG",
    set: "MOM",
    rarity: "Rare",
    foil: "false",
    price: "3.16"
  })
  MTG_card4.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/MTG_Cards/mom-198-ozolith-the-shattered-spire.jpg"),
    filename: "Ozolith_the_Shattered_Spire.jpg")

  MTG_card5 = Card.create!({
    name: "Seed of Hope",
    game: "MTG",
    set: "MOM",
    rarity: "Common",
    foil: "false",
    price: "0.01"
  })
  MTG_card5.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/MTG_Cards/mom-204-seed-of-hope.jpg"),
    filename: "Seed_of_Hope.jpg")

  MTG_card6 = Card.create!({
    name: "Borborygmos and Fblthp",
    game: "MTG",
    set: "MOM",
    rarity: "Mythic Rare",
    foil: "false",
    price: "0.48"
  })
  MTG_card6.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/MTG_Cards/mom-219-borborygmos-and-fblthp.jpg"),
    filename: "Borborygmos_and_Fblthp.png")

  MTG_card7 = Card.create!({
    name: "Elvish Vatkeeper",
    game: "MTG",
    set: "MOM",
    rarity: "Uncommon",
    foil: "false",
    price: "0.03"
  })
  MTG_card7.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/MTG_Cards/mom-223-elvish-vatkeeper.jpg"),
    filename: "Elvish_Vatkeeper.png")

  MTG_card8 = Card.create!({
    name: "Rankle and Torbran",
    game: "MTG",
    set: "MOM",
    rarity: "Rare",
    foil: "false",
    price: "0.20"
  })
  MTG_card8.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/MTG_Cards/mom-252-rankle-and-torbran.jpg"),
    filename: "Rankle_and_Torbran.png")

  MTG_card9 = Card.create!({
    name: "Monastery Mentor",
    game: "MTG",
    set: "MOM",
    rarity: "Rare",
    foil: "false",
    price: "2.18"
  })
  MTG_card9.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/MTG_Cards/mom-28-monastery-mentor.jpg"),
    filename: "Monastery_Mentor.png")
  
  MTG_card10 = Card.create!({
    name: "Archangel Elspeth",
    game: "MTG",
    set: "MOM",
    rarity: "Rare",
    foil: "false",
    price: "4.18"
  })
  MTG_card10.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/MTG_Cards/mom-6-archangel-elspeth.jpg"),
    filename: "Archangel_Elspeth.png")

  puts "Creating YuGiOh Cards..."

  YGO_card1 = Card.create!({
    name: "Blue-Eyes White Dragon",
    game: "YuGiOh",
    set: "LOB",
    rarity: "Ultra Rare",
    foil: "true",
    price: "24.95"
  })
  YGO_card1.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/YuGiOh_Cards/Blue_Eyes.jpg"),
    filename: "Blue_Eyes_White_Dragon.png")
  
  YGO_card2 = Card.create!({
    name: "Chimera, the Master of Beasts",
    game: "YuGiOh",
    set: "WCPS",
    rarity: "Ultra Rare",
    foil: "true",
    price: "1.57"
  })
  YGO_card2.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/YuGiOh_Cards/Chimera_King_of_Beasts.jpg"),
    filename: "Chimera_Master_of_Beasts.png")

  YGO_card3 = Card.create!({
    name: "Dark Magician",
    game: "YuGiOh",
    set: "YGLD",
    rarity: "Ultra Rare",
    foil: "true",
    price: "3.98"
  })
  YGO_card3.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/YuGiOh_Cards/Dark_Magician.jpg"),
    filename: "Dark_Magician.png")

  YGO_card4 = Card.create!({
    name: "Emperor of Lightning",
    game: "YuGiOh",
    set: "WCPS",
    rarity: "Ultra Rare",
    foil: "true",
    price: "0.55"
  })
  YGO_card4.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/YuGiOh_Cards/Emperor_of_Lightning.jpg"),
    filename: "Emperor_of_Lightning.png")

  YGO_card5 = Card.create!({
    name: "Kuriboh",
    game: "YuGiOh",
    set: "MRD",
    rarity: "Super Rare",
    foil: "false",
    price: "0.39"
  })
  YGO_card5.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/YuGiOh_Cards/Kuriboh.jpg"),
    filename: "Kuriboh.png")

  YGO_card6 = Card.create!({
    name: "Queen of Fate - Eternia",
    game: "YuGiOh",
    set: "WCS",
    rarity: "Ultra Rare",
    foil: "true",
    price: "0.55"
  })
  YGO_card6.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/YuGiOh_Cards/Queen_of_Fate_Eternia.jpg"),
    filename: "Queen_of_Fate.png")

  YGO_card7 = Card.create!({
    name: "Shining Flare Wingman",
    game: "YuGiOh",
    set: "EEN",
    rarity: "Ultra Rare",
    foil: "true",
    price: "1.79"
  })
  YGO_card7.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/YuGiOh_Cards/Shining_Flare_Wingman.jpg"),
    filename: "Shining_Flare_Wingman.png")

  YGO_card8 = Card.create!({
    name: "Testament of the Arcane Lords",
    game: "YuGiOh",
    set: "WCPS",
    rarity: "Ultra Rare",
    foil: "true",
    price: "2.34"
  })
  YGO_card8.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/YuGiOh_Cards/Testament_of_the_Arcane_Lords.jpg"),
    filename: "Testament_Arcane_Lords.png")

  YGO_card9 = Card.create!({
    name: "Ash Blossom and Joyous Spring",
    game: "YuGiOh",
    set: "MACR",
    rarity: "Secret Rare",
    foil: "true",
    price: "32.87"
  })
  YGO_card9.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/YuGiOh_Cards/Ash_Blossom_and_Joyous_Spring.jpg"),
    filename: "Ash_Blossom.png")

  YGO_card10 = Card.create!({
    name: "Maxx C",
    game: "YuGiOh",
    set: "SR03",
    rarity: "Common",
    foil: "false",
    price: "13.85"
  })
  YGO_card10.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/YuGiOh_Cards/Maxx_C.jpg"),
    filename: "Maxx_C.png")

  YGO_card11 = Card.create!({
    name: "Mystical Space Typhoon",
    game: "YuGiOh",
    set: "SRL",
    rarity: "Ultra Rare",
    foil: "true",
    price: "3.99"
  })
  YGO_card11.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/YuGiOh_Cards/Mystical_Space_Typhoon.jpg"),
    filename: "MST.png")

  YGO_card12 = Card.create!({
    name: "Skill Drain",
    game: "YuGiOh",
    set: "DCR",
    rarity: "Rare",
    foil: "false",
    price: "2.48"
  })
  YGO_card12.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/YuGiOh_Cards/Skill_Drain.jpg"),
    filename: "Skill_Drain.png")

  YGO_card13 = Card.create!({
    name: "Nibiru, the Primal Being",
    game: "YuGiOh",
    set: "MP22",
    rarity: "Ultra Rare",
    foil: "false",
    price: "4.47"
  })
  YGO_card13.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/YuGiOh_Cards/Nibiru.jpg"),
    filename: "Nibiru.png")
    
  puts "Creating Pokemon Cards..."

  PKMN_card1 = Card.create!({
    name: "Professor's Research",
    game: "Pokemon",
    set: "CEL",
    rarity: "Rare",
    foil: "true",
    price: "0.04"
  })
  PKMN_card1.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/Pokemon_Cards/CEL_EN_23.png"),
    filename: "Professors_Research.png")

  PKMN_card2 = Card.create!({
    name: "Venusaur",
    game: "Pokemon",
    set: "CELC",
    rarity: "Special Rare",
    foil: "true",
    price: "3.83"
  })
  PKMN_card2.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/Pokemon_Cards/CELC_EN_15_A1.png"),
    filename: "Venusaur.png")

  PKMN_card3 = Card.create!({
    name: "Blastoise",
    game: "Pokemon",
    set: "CELC",
    rarity: "Special Rare",
    foil: "true",
    price: "5.62"
  })
  PKMN_card3.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/Pokemon_Cards/CELC_EN_2_A.png"),
    filename: "Blastoise.png")

  PKMN_card4 = Card.create!({
    name: "Charizard",
    game: "Pokemon",
    set: "CELC",
    rarity: "Special Rare",
    foil: "true",
    price: "79.42"
  })
  PKMN_card4.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/Pokemon_Cards/CELC_EN_4_A.png"),
    filename: "Charizard.png")
  
  PKMN_card5 = Card.create!({
    name: "Ultra Ball",
    game: "Pokemon",
    set: "SM1",
    rarity: "Common",
    foil: "false",
    price: "0.26"
  })
  PKMN_card5.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/Pokemon_Cards/SM1_EN_135.png"),
    filename: "Ultra_Ball.png")

  PKMN_card6 = Card.create!({
    name: "Annihilape",
    game: "Pokemon",
    set: "SV01",
    rarity: "Rare",
    foil: "true",
    price: "0.10"
  })
  PKMN_card6.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/Pokemon_Cards/SV01_EN_109.png"),
    filename: "Annihilape.png")

  PKMN_card7 = Card.create!({
    name: "Krookodile",
    game: "Pokemon",
    set: "SV01",
    rarity: "Uncommon",
    foil: "false",
    price: "0.02"
  })
  PKMN_card7.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/Pokemon_Cards/SV01_EN_117.png"),
    filename: "Krookodile.png")

  PKMN_card8 = Card.create!({
    name: "Maushold",
    game: "Pokemon",
    set: "SV01",
    rarity: "Uncommon",
    foil: "false",
    price: "0.01"
  })
  PKMN_card8.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/Pokemon_Cards/SV01_EN_161.png"),
    filename: "Maushold.png")

  PKMN_card9 = Card.create!({
    name: "Toedscool",
    game: "Pokemon",
    set: "SV01",
    rarity: "Common",
    foil: "false",
    price: "0.06"
  })
  PKMN_card9.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/Pokemon_Cards/SV01_EN_24.png"),
    filename: "Toedscool.png")

  PKMN_card10 = Card.create!({
    name: "Slowbro",
    game: "Pokemon",
    set: "SV01",
    rarity: "Common",
    foil: "false",
    price: "0.11"
  })
  PKMN_card10.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/Pokemon_Cards/SV01_EN_43.png"),
    filename: "Slowbro.png")

  PKMN_card11 = Card.create!({
    name: "Wiglett",
    game: "Pokemon",
    set: "SV01",
    rarity: "Common",
    foil: "false",
    price: "0.06"
  })
  PKMN_card11.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/Pokemon_Cards/SV01_EN_56.png"),
    filename: "Wiglett.png")

  PKMN_card12 = Card.create!({
    name: "Cetitan",
    game: "Pokemon",
    set: "SV01",
    rarity: "Common",
    foil: "false",
    price: "0.06"
  })
  PKMN_card12.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/Pokemon_Cards/SV01_EN_60.png"),
    filename: "Cetitan.png")

  PKMN_card13 = Card.create!({
    name: "Shuppet",
    game: "Pokemon",
    set: "SV01",
    rarity: "Common",
    foil: "false",
    price: "0.04"
  })
  PKMN_card13.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/Pokemon_Cards/SV01_EN_87.png"),
    filename: "Shuppet.png")

  PKMN_card14 = Card.create!({
    name: "Fidough",
    game: "Pokemon",
    set: "SV01",
    rarity: "Common",
    foil: "false",
    price: "0.07"
  })
  PKMN_card14.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/Pokemon_Cards/SV01_EN_98.png"),
    filename: "Fidough.png")

  PKMN_card15 = Card.create!({
    name: "Koraidon",
    game: "Pokemon",
    set: "SV01",
    rarity: "Special Rare",
    foil: "true",
    price: "1.28"
  })
  PKMN_card15.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/Pokemon_Cards/SV01_EN_125.png"),
    filename: "Koraidon.png")

  PKMN_card16 = Card.create!({
    name: "Miraidon",
    game: "Pokemon",
    set: "SV01",
    rarity: "Special Rare",
    foil: "true",
    price: "4.29"
  })
  PKMN_card16.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/Pokemon_Cards/SV01_EN_81.png"),
    filename: "Miraidon.png")

  PKMN_card17 = Card.create!({
    name: "Zacian",
    game: "Pokemon",
    set: "CRZEN",
    rarity: "Rare",
    foil: "true",
    price: "0.26"
  })
  PKMN_card17.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/Pokemon_Cards/SWSH12PT5_EN_94.png"),
    filename: "Zacian.png")

  PKMN_card18 = Card.create!({
    name: "Zamazenta",
    game: "Pokemon",
    set: "CRZEN",
    rarity: "Rare",
    foil: "true",
    price: "1.16"
  })
  PKMN_card18.photo.attach(io: URI.open("https://tcgamer-seeds.s3.us-west-1.amazonaws.com/Pokemon_Cards/SWSH12PT5_EN_97.png"),filename: "Zamazenta.png")

  puts "Creating Comments..."

  Comment1 = Comment.create!({
    card_id: 1,
    commenter_id: User.all[Random.rand(11)].id,
    body: "This'll go great in my cube!"
  })

  Comment2 = Comment.create!({
    card_id: 2,
    commenter_id: User.all[Random.rand(11)].id,
    body: "This'll also go great in my cube!"
  })

  Comment3 = Comment.create!({
    card_id: 3,
    commenter_id: User.all[Random.rand(11)].id,
    body: "So many cards for my cube!"
  })

  Comment4 = Comment.create!({
    card_id: 4,
    commenter_id: User.all[Random.rand(11)].id,
    body: "I just got this for my Animar deck! I can't wait to test it out!"
  })

  Comment5 = Comment.create!({
    card_id: 5,
    commenter_id: User.all[Random.rand(11)].id,
    body: "This is such a sad story beat, Wrenn didn't deserve to die T_T"
  })

  Comment6 = Comment.create!({
    card_id: 6,
    commenter_id: User.all[Random.rand(11)].id,
    body: "Fblthp is always in the most strange of places."
  })

  Comment7 = Comment.create!({
    card_id: 7,
    commenter_id: User.all[Random.rand(11)].id,
    body: "The incdubate mechanic sure is interesting."
  })

  Comment8 = Comment.create!({
    card_id: 8,
    commenter_id: User.all[Random.rand(11)].id,
    body: "Rankle Master of Prankle back at it again at Krispy Kreme!"
  })

  Comment9 = Comment.create!({
    card_id: 9,
    commenter_id: User.all[Random.rand(11)].id,
    body: "So cool that this got a reprint"
  })

  Comment10 = Comment.create!({
    card_id: 10,
    commenter_id: User.all[Random.rand(11)].id,
    body: "What an interesting direction to take Elspeth as a character, really powerful card too!"
  })

  Comment11 = Comment.create!({
    card_id: 11,
    commenter_id: User.all[Random.rand(11)].id,
    body: "...What hope do you have, against 2?"
  })

  Comment12 = Comment.create!({
    card_id: 12,
    commenter_id: User.all[Random.rand(11)].id,
    body: "Shoutouts to Season 2 Yugi Deck!"
  })

  Comment13 = Comment.create!({
    card_id: 13,
    commenter_id: User.all[Random.rand(11)].id,
    body: "Just wait until he plays Mystical Hats!"
  })

  Comment14 = Comment.create!({
    card_id: 14,
    commenter_id: User.all[Random.rand(11)].id,
    body: "This is a World of Warcraft reference. I'm sure of it!"
  })

  Comment15 = Comment.create!({
    card_id: 15,
    commenter_id: User.all[Random.rand(11)].id,
    body: "Kuriboh is going to make a rainbow bridge directly to your life points. Which allows my Gaia the Fierce Knight to bypass your monsters and attack your life points directly!"
  })

  Comment16 = Comment.create!({
    card_id: 16,
    commenter_id: User.all[Random.rand(11)].id,
    body: "These WCPS promos are real cool"
  })

  Comment17 = Comment.create!({
    card_id: 17,
    commenter_id: User.all[Random.rand(11)].id,
    body: "My favorite YuGiOh card!"
  })

  Comment18 = Comment.create!({
    card_id: 18,
    commenter_id: User.all[Random.rand(11)].id,
    body: "This implies the existence of a Fire Lord, Frost Lord, Nature Lord, Shadow Lord, and Holy Lord"
  })

  Comment19 = Comment.create!({
    card_id: 19,
    commenter_id: User.all[Random.rand(11)].id,
    body: "Thank you for coutering ridiculous combos o7"
  })

  Comment20 = Comment.create!({
    card_id: 20,
    commenter_id: User.all[Random.rand(11)].id,
    body: "Banned but never forgotten!"
  })

  Comment21 = Comment.create!({
    card_id: 21,
    commenter_id: User.all[Random.rand(11)].id,
    body: "An oldie, and STILL a goodie!"
  })

  Comment22 = Comment.create!({
    card_id: 22,
    commenter_id: User.all[Random.rand(11)].id,
    body: "TFW you try to play HEROs against this card"
  })

  Comment23 = Comment.create!({
    card_id: 23,
    commenter_id: User.all[Random.rand(11)].id,
    body: "Another valiant soldier to fight against all of the combo decks"
  })

  Comment24 = Comment.create!({
    card_id: 24,
    commenter_id: User.all[Random.rand(11)].id,
    body: "Discard your hand and draw 7!? OP!"
  })

  Comment25 = Comment.create!({
    card_id: 25,
    commenter_id: User.all[Random.rand(11)].id,
    body: "You could have just walked away, but you didn't you jerk!"
  })

  Comment26 = Comment.create!({
    card_id: 26,
    commenter_id: User.all[Random.rand(11)].id,
    body: "Just wait until he pulls out his sunglasses!"
  })

  Comment27 = Comment.create!({
    card_id: 27,
    commenter_id: User.all[Random.rand(11)].id,
    body: "Hail to the king baby!"
  })

  Comment28 = Comment.create!({
    card_id: 28,
    commenter_id: User.all[Random.rand(11)].id,
    body: "The tool to catch "
  })

  Comment29 = Comment.create!({
    card_id: 29,
    commenter_id: User.all[Random.rand(11)].id,
    body: "This is a Fate reference"
  })

  Comment30 = Comment.create!({
    card_id: 30,
    commenter_id: User.all[Random.rand(11)].id,
    body: "One cool croc"
  })

  Comment31 = Comment.create!({
    card_id: 31,
    commenter_id: User.all[Random.rand(11)].id,
    body: "Tidy Up."
  })

  Comment32 = Comment.create!({
    card_id: 32,
    commenter_id: User.all[Random.rand(11)].id,
    body: "The legs creep me out every time"
  })

  Comment33 = Comment.create!({
    card_id: 33,
    commenter_id: User.all[Random.rand(11)].id,
    body: "Slowbro."
  })

  Comment34 = Comment.create!({
    card_id: 34,
    commenter_id: User.all[Random.rand(11)].id,
    body: "Wiglett Wig doesn't roll off the tongue as well as Diglett Dig."
  })

  Comment35 = Comment.create!({
    card_id: 35,
    commenter_id: User.all[Random.rand(11)].id,
    body: "BIG BOY!"
  })

  Comment36 = Comment.create!({
    card_id: 36,
    commenter_id: User.all[Random.rand(11)].id,
    body: "The answer to the question: How do you make a tissue dance?"
  })

  Comment37 = Comment.create!({
    card_id: 37,
    commenter_id: User.all[Random.rand(11)].id,
    body: "Perfect, no notes"
  })

  Comment38 = Comment.create!({
    card_id: 38,
    commenter_id: User.all[Random.rand(11)].id,
    body: "The Winged King!"
  })

  Comment39 = Comment.create!({
    card_id: 39,
    commenter_id: User.all[Random.rand(11)].id,
    body: "The Iron Serpent!"
  })

  Comment40 = Comment.create!({
    card_id: 40,
    commenter_id: User.all[Random.rand(11)].id,
    body: "This is a Dark Souls reference."
  })

  Comment41 = Comment.create!({
    card_id: 41,
    commenter_id: User.all[Random.rand(11)].id,
    body: "Good dog."
  })

  puts "Done!"