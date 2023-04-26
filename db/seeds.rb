# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
  require "open-uri"

    puts "Destroying tables..."
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

    puts "Done!"
  end