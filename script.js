/**
 * GreenMeans: Native Plant Suggester - Core Standalone Script
 * Focused entirely on UK Native Species to support British Pollinators and Wildlife
 */

// Plant suggestion dataset mapped to region and sunlight keys
const PLANTS_DATASET = {
    "south_full_sun": [
        {
            "name": "Field Forget-me-not",
            "scientificName": "Myosotis arvensis",
            "category": "Wildflower",
            "height": "10 - 40 cm",
            "pollinators": ["Bees", "Hoverflies", "Butterflies"],
            "benefits": "Produces tiny, beautiful sky-blue flowers.",
            "plantingTip": "Easily self-seeds. Can be used in meadows or borders.",
            "colorClass": "bg-wildflower",
            "description": "A delicate, hairy annual or short-lived perennial with tiny, typically azure-blue flowers featuring yellow centres. It forms low, expanding mounds of foliage.",
            "usages": "Ideal for softening edges, underplanting, and creating naturalised drifts.",
            "plantingTime": "Sow seeds in spring or autumn."
        },
        {
            "name": "Corn Marigold",
            "scientificName": "Glebionis segetum",
            "category": "Wildflower",
            "height": "30 - 60 cm",
            "pollinators": ["Bees", "Hoverflies"],
            "benefits": "Vibrant golden-yellow daisy-like flowers that bloom for a long period.",
            "plantingTip": "Needs disturbed soil to germinate. Often sown as part of a cornfield annual mix.",
            "colorClass": "bg-wildflower",
            "description": "A striking native annual sporting brilliant golden-yellow flower heads and distinctive blue-green, slightly fleshy, deeply lobed leaves.",
            "usages": "Excellent for annual meadow mixes and vibrant summer colour.",
            "plantingTime": "Sow directly into bare soil in spring or autumn."
        },
        {
            "name": "Wild Carrot",
            "scientificName": "Daucus carota",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": ["Hoverflies", "Bees", "Beetles"],
            "benefits": "Intricate, flat-topped clusters of tiny white flowers, sometimes with a single red flower in the centre.",
            "plantingTip": "Thrives in well-drained, nutrient-poor soils.",
            "colorClass": "bg-wildflower",
            "description": "An upright biennial bearing feathery foliage and stunning umbels of delicate white flowers. The flower heads curl inward as they go to seed, forming a characteristic 'bird's nest' shape.",
            "usages": "Valuable in wildflower meadows and for attracting predatory insects.",
            "plantingTime": "Sow seeds in late summer or autumn."
        },
        {
            "name": "Red Clover",
            "scientificName": "Trifolium pratense",
            "category": "Wildflower",
            "height": "15 - 40 cm",
            "pollinators": ["Bumblebees", "Butterflies", "Moths"],
            "benefits": "A highly valuable nectar source and excellent nitrogen fixer for the soil.",
            "plantingTip": "Tolerates most soils. Great for meadow lawns.",
            "colorClass": "bg-wildflower",
            "description": "A familiar meadow perennial with distinctive trefoil leaves (often bearing a white crescent marking) and pinkish-red, globe-shaped flower heads.",
            "usages": "Important component of wildlife lawns, meadows, and agricultural leys.",
            "plantingTime": "Sow in spring or autumn."
        },
        {
            "name": "White Campion",
            "scientificName": "Silene latifolia",
            "category": "Wildflower",
            "height": "30 - 100 cm",
            "pollinators": ["Moths"],
            "benefits": "Flowers emit a sweet clove-like scent in the evening to attract night-flying moths.",
            "plantingTip": "Well-drained soil in full sun or part shade.",
            "colorClass": "bg-wildflower",
            "description": "An upright, slightly hairy perennial with opposite leaves and pure white, deeply notched petals on flowers that open fully in the late afternoon.",
            "usages": "Perfect for night gardens and supporting nocturnal pollinator populations.",
            "plantingTime": "Sow seeds in spring or autumn."
        },
        {
            "name": "Betony",
            "scientificName": "Betonica officinalis",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": ["Bees", "Butterflies", "Hoverflies"],
            "benefits": "Striking magenta-purple flower spikes above neat rosettes of scalloped leaves.",
            "plantingTip": "Grows well in heavy clay or moderately fertile soils.",
            "colorClass": "bg-wildflower",
            "description": "A very attractive native perennial of grasslands and open woods, producing dense, short spikes of vivid purplish-red hooded flowers on square stems.",
            "usages": "Ideal for herbaceous borders, meadow planting, and traditional herb gardens.",
            "plantingTime": "Plant out from spring to autumn."
        },
        {
            "name": "Common Mallow",
            "scientificName": "Malva sylvestris",
            "category": "Perennial",
            "height": "60 - 120 cm",
            "pollinators": ["Bees", "Hoverflies"],
            "benefits": "Showy deep pink-purple flowers with dark veins, blooming profusely through summer.",
            "plantingTip": "Very easily grown in most soils. Can self-seed vigorously.",
            "colorClass": "bg-wildflower",
            "description": "A robust, bushy perennial with deeply lobed leaves and highly attractive, large, pink-purple flowers streaked with darker veins.",
            "usages": "Excellent for sunny banks, borders, and cottage garden styles.",
            "plantingTime": "Sow seeds or plant out in spring."
        },
        {
            "name": "Yellow Horned Poppy",
            "scientificName": "Glaucium flavum",
            "category": "Perennial",
            "height": "30 - 90 cm",
            "pollinators": ["Bees", "Hoverflies"],
            "benefits": "Striking silvery-blue foliage and large, bright yellow flowers.",
            "plantingTip": "Needs extremely well-drained, sandy or shingly soil. Found naturally on coasts.",
            "colorClass": "bg-wildflower",
            "description": "A spectacular coastal perennial known for its beautiful glaucous wavy leaves, large brilliant yellow poppy flowers, and extremely long curved seed pods.",
            "usages": "Perfect for gravel gardens, coastal exposures, and dry sandy beds.",
            "plantingTime": "Sow seeds in autumn or spring."
        },
        {
            "name": "Wild Strawberry",
            "scientificName": "Fragaria vesca",
            "category": "Perennial",
            "height": "10 - 30 cm",
            "pollinators": ["Small Bees", "Hoverflies"],
            "benefits": "Provides ground cover and small, intensely sweet, edible fruits.",
            "plantingTip": "Great for dappled woodland shade or edging borders.",
            "colorClass": "bg-wildflower",
            "description": "A creeping perennial that spreads by stolons, featuring small white flowers followed by distinctive, tiny, highly aromatic red strawberries.",
            "usages": "Excellent edible ground cover for woodland gardens or underplanting.",
            "plantingTime": "Plant runners or sow seeds in spring or autumn."
        },
        {
            "name": "Greater Knapweed",
            "scientificName": "Centaurea scabiosa",
            "category": "Perennial",
            "height": "50 - 90 cm",
            "pollinators": ["Butterflies", "Bumblebees", "Finches"],
            "benefits": "Large, showy, thistle-like magenta flower heads without the spines.",
            "plantingTip": "Thrives on chalky or limestone soils in full sun.",
            "colorClass": "bg-wildflower",
            "description": "A robust, deep-rooted perennial with deeply pinnate leaves and large, prominent magenta-purple flower heads surrounded by a dark fringed involucre.",
            "usages": "Fantastic for chalk downland meadows and a magnet for butterflies.",
            "plantingTime": "Plant bare-root or potted specimens in spring or autumn."
        },
        {
            "name": "Guelder Rose",
            "scientificName": "Viburnum opulus",
            "category": "Shrub",
            "height": "2 - 4 m",
            "pollinators": [
                "Hoverflies",
                "Moths",
                "Bees"
            ],
            "benefits": "Spectacular lacecap white flowers in spring, followed by translucent red berries.",
            "plantingTip": "Prefers damp, reasonably fertile soils. Beautiful when mixed into native hedgerows.",
            "colorClass": "bg-tree",
            "description": "A glorious native deciduous shrub that features maple-like lobed leaves. In late spring it produces flat heads of creamy-white flowers, turning to ruby-red berries in autumn.",
            "usages": "Essential for wildlife-friendly hedging or damp woodland edges.",
            "plantingTime": "Plant bare-root between November and March."
        },
        {
            "name": "Meadowsweet",
            "scientificName": "Filipendula ulmaria",
            "category": "Perennial",
            "height": "60 - 120 cm",
            "pollinators": [
                "Bees",
                "Hoverflies"
            ],
            "benefits": "Produces large, fluffy, sweetly scented clouds of cream flowers.",
            "plantingTip": "Requires moist soil; thrives alongside ponds or wet ditches.",
            "colorClass": "bg-wildflower",
            "description": "A tall, majestic damp-meadow perennial with distinctively veined, dark green leaflets and dense, frothy clusters of almond-scented creamy-white flowers.",
            "usages": "Unbeatable for bog gardens and damp meadow plantings.",
            "plantingTime": "Plant out in spring or autumn into reliably moist soil."
        },
        {
            "name": "Common Comfrey",
            "scientificName": "Symphytum officinale",
            "category": "Perennial",
            "height": "80 - 120 cm",
            "pollinators": [
                "Bumblebees",
                "Mason Bees"
            ],
            "benefits": "One of the most powerful nectar producers. Tubular bell flowers recharge nectar rapidly.",
            "plantingTip": "Has a deep taproot. Do not plant where you might want to remove it later.",
            "colorClass": "bg-wildflower",
            "description": "A vigorous, bristly perennial that forms large clumps. Through summer it unfurls characteristic drooping clusters of tubular flowers.",
            "usages": "Incredible for bumblebees. Leaves can be harvested to make exceptionally rich liquid organic fertilizer.",
            "plantingTime": "Sow seeds or plant root cuttings in spring."
        },
        {
            "name": "Yellow Flag Iris",
            "scientificName": "Iris pseudacorus",
            "category": "Perennial",
            "height": "1 - 1.5 m",
            "pollinators": [
                "Hoverflies",
                "Long-tongued Bees"
            ],
            "benefits": "Striking architectural foliage and massive bright yellow summer blooms.",
            "plantingTip": "Can be incredibly vigorous in shallow water. Submerge in aquatic baskets to restrict spread.",
            "colorClass": "bg-wildflower",
            "description": "A bold, robust aquatic and marginal perennial featuring tall, sword-like leaves and vivid yellow flowers.",
            "usages": "Perfect for large wildlife ponds. Provides vital emergence supports for aquatic dragonfly nymphs.",
            "plantingTime": "Plant rhizomes just below the soil surface in spring."
        },
        {
            "name": "Cuckooflower",
            "scientificName": "Cardamine pratensis",
            "category": "Perennial",
            "height": "30 - 50 cm",
            "pollinators": [
                "Orange-tip Butterfly (Host)"
            ],
            "benefits": "The primary larval food plant for the iconic Orange-tip butterfly.",
            "plantingTip": "Prefers consistently damp grass or meadow conditions. Do not mow until mid-summer.",
            "colorClass": "bg-wildflower",
            "description": "Also known as Lady's Smock, this delicate, moisture-loving perennial puts up slender stems holding pale lilac flowers around the time the first cuckoos are heard.",
            "usages": "Crucial for wetland or damp meadow restoration.",
            "plantingTime": "Plant 'in the green' in spring or sow fresh seed in late summer."
        },
        {
            "name": "Herb Robert",
            "scientificName": "Geranium robertianum",
            "category": "Perennial",
            "height": "20 - 40 cm",
            "pollinators": [
                "Small Bees",
                "Hoverflies"
            ],
            "benefits": "Adaptable scrambling foliage that often turns deep crimson. Tiny bright pink flowers.",
            "plantingTip": "Self-seeds prolifically in shady, dry, or awkward spots.",
            "colorClass": "bg-wildflower",
            "description": "A common but valuable native woodland geranium with fern-like leaves on reddish stems. It produces starry vivid pink flowers.",
            "usages": "Excellent for dry shade, underplanting hedges, or filling gaps in stony ground.",
            "plantingTime": "Sow seeds from spring to late summer."
        },
        {
            "name": "Viper's Bugloss",
            "scientificName": "Echium vulgare",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Red Mason Bees",
                "Garden Bumblebees",
                "Painted Lady Butterflies"
            ],
            "benefits": "A magnet for long-tongued insects. Bright blue funnel flower spikes. Uniquely high daily nectar production rate.",
            "plantingTip": "Enjoys dry, sandy, gravelly, or chalky soils. Self-seeding; press seed gently into the surface of the soil during autumn.",
            "colorClass": "bg-wildflower",
            "description": "A spectacular biennial wildflower forming impressive tall spikes laden with vivid blue, funnel-shaped blossoms from June to September. Its bristly, lance-shaped leaves provide a textured backdrop.",
            "usages": "Ideal for unstructured meadow plantings, dry gravel beds, or rocky coastal margins. Often used to create dynamic vertical elements in dry situations.",
            "plantingTime": "Sow seeds directly in late summer or early autumn for germination the following spring."
        },
        {
            "name": "Hemp Agrimony",
            "scientificName": "Eupatorium cannabinum",
            "category": "Perennial",
            "height": "1 - 1.5 m",
            "pollinators": [
                "Butterflies",
                "Hoverflies"
            ],
            "benefits": "Frothy pink flower heads. Absolutely loved by autumn butterflies.",
            "plantingTip": "Prefers damp soils. Excellent near ponds or damp ditches.",
            "colorClass": "bg-wildflower",
            "description": "A substantial, robust marginal perennial reaching stately heights, topped with large, frothy clusters of soft pink or pale purplish flowers in late summer.",
            "usages": "Unbeatable for damp, boggy conditions or the margins of large ponds. A vital late-season nectar station for migratory butterflies.",
            "plantingTime": "Plant divisions or young plants during autumn or spring into moisture-retentive soils."
        },
        {
            "name": "Blackthorn",
            "scientificName": "Prunus spinosa",
            "category": "Tree/Shrub",
            "height": "Up to 4m",
            "pollinators": [
                "Early Bees",
                "Moths"
            ],
            "benefits": "Clouds of early white blossom. Produces sloes for winter birds.",
            "plantingTip": "Suckers strongly. Forms dense impenetrable thorny thicket.",
            "colorClass": "bg-tree",
            "description": "A densely branching, fiercely thorny shrub that precedes hawthorn by flowering on bare wood with pure white blossoms, later bearing astringent purple sloes.",
            "usages": "Fantastic mixed into hedgerows to create stock-proof, animal-friendly security thickets.",
            "plantingTime": "Plant bare-rooted in deep winter (Nov-Feb). Beware its tendency to sucker vigorously."
        },
        {
            "name": "Red Campion",
            "scientificName": "Silene dioica",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Long-tongued Bumblebees",
                "Hoverflies"
            ],
            "benefits": "Bright pink flowers. Vital spring nectar.",
            "plantingTip": "Adaptable, enjoys somewhat damp, fertile soils.",
            "colorClass": "bg-wildflower",
            "description": "An enduring, loosely branching perennial with slightly hairy, rounded leaves. Generates masses of striking rich pink, deeply notched blooms across the spring and summer.",
            "usages": "Flourishes wonderfully along hedge bottoms, dappled woodland walks, and informal herbaceous situations.",
            "plantingTime": "Sow outdoors in autumn or spring. Self-seeds very reliably in suitable soils."
        },
        {
            "name": "Primrose",
            "scientificName": "Primula vulgaris",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "Brimstone Butterflies",
                "Early Bees"
            ],
            "benefits": "Classic pale yellow spring flowers. Important early nectar source.",
            "plantingTip": "Needs moist, shady spots. Great under deciduous trees.",
            "colorClass": "bg-wildflower",
            "description": "A charming, low-lying perennial that carpets the early spring ground with pale, buttery yellow rosettes with a remarkably subtle, sweet fragrance.",
            "usages": "A staple for early nectar. Excels planted under deciduous trees, in lightly shaded borders, or tucked neatly into shady orchard grasses.",
            "plantingTime": "Buy 'in the green' directly after flowering in spring, or divide mature clumps in early autumn."
        },
        {
            "name": "Bluebell",
            "scientificName": "Hyacinthoides non-scripta",
            "category": "Bulb",
            "height": "20 - 40 cm",
            "pollinators": [
                "Brimstone",
                "Bees"
            ],
            "benefits": "Carpets ancient woodland in deep violet-blue. Scented.",
            "plantingTip": "Must ensure native stock (non-scripta), plant in autumn.",
            "colorClass": "bg-wildflower",
            "description": "A highly celebrated woodland bulb setting forth strap-like leaves and gently drooping, one-sided flower spikes filled with strongly scented, deep violet-blue bells.",
            "usages": "Creates magical woodland carpets under deciduous canopies and mature hedges. Essential to ensure pure native non-scripta forms are used.",
            "plantingTime": "Plant dormant bulbs deeply in the autumn, or lift and divide congested clumps 'in the green' late spring."
        },
        {
            "name": "Foxglove",
            "scientificName": "Digitalis purpurea",
            "category": "Biennial",
            "height": "1 - 2 m",
            "pollinators": [
                "Bumblebees",
                "Moths"
            ],
            "benefits": "Tall spires of purple-pink bells. Excellent for deep-throated bees.",
            "plantingTip": "Poisonous. Thrives in woodland edges and disturbed soils.",
            "colorClass": "bg-wildflower",
            "description": "A classic woodland biennial producing a magnificent, very tall vertical spire of nodding, tubular pink-purple flowers, heavily speckled on their interior lip.",
            "usages": "Brings architectural presence to the back of shaded borders, woodland edges, and dappled clearings. Do not plant near edible crops or ingest.",
            "plantingTime": "Sow seeds directly outdoors in late spring/early summer. Will produce rosettes year one, flowers year two."
        },
        {
            "name": "Common Sorrel",
            "scientificName": "Rumex acetosa",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": [
                "Small Copper Butterfly (Host)"
            ],
            "benefits": "Reddish flower spikes. Leaves are food for caterpillars.",
            "plantingTip": "Very easy to grow in meadow situations.",
            "colorClass": "bg-wildflower",
            "description": "A hardy, deep meadow perennial bearing arrow-shaped fleshy leaves extending into slender spikes of delicate, rusty-red flowering panicles reaching above the grass canopy.",
            "usages": "Edible, sharp-tasting foliage. In the wild garden setting, it specifically feeds specific metallic copper butterflies.",
            "plantingTime": "Sow freely into meadows, borders, or kitchen garden plots from early spring to late summer."
        },
        {
            "name": "Field Scabious",
            "scientificName": "Knautia arvensis",
            "category": "Perennial",
            "height": "60 - 100 cm",
            "pollinators": [
                "Butterflies",
                "Bees"
            ],
            "benefits": "Pincushion-like lilac flowers.",
            "plantingTip": "Thrives in dry, chalky or sandy soils.",
            "colorClass": "bg-wildflower",
            "description": "A robust, tall, rough-stemmed perennial carrying numerous delicate, flat, pincushion-like lilac-blue flower heads over a long, generous late summer season.",
            "usages": "Very open and airy, making it superb for drifting through tall meadow grasses and loose herbaceous borders.",
            "plantingTime": "Sow seeds in spring or early autumn, or split mature fleshy roots during late winter."
        },
        {
            "name": "Chicory",
            "scientificName": "Cichorium intybus",
            "category": "Perennial",
            "height": "1 - 1.5m",
            "pollinators": [
                "Bees",
                "Hoverflies"
            ],
            "benefits": "Stunning pure sky-blue daisy-like blooms.",
            "plantingTip": "Deep taproot prefers chalk and limestone margins.",
            "colorClass": "bg-wildflower",
            "description": "A stiff, erect, remarkably tall perennial. It bears rigid branching stems and striking, clear sky-blue daisy flowers that open in the morning and close by mid-afternoon.",
            "usages": "A beautiful structural plant for the rear of sunny, well-draining borders or wildflower meadows. Deep taproots tolerate severe drought.",
            "plantingTime": "Sow seeds in spring directly where they are to flower, as it heavily resents transplantation."
        }
    ],
    "south_part_sun": [
        {
            "name": "Viper's Bugloss",
            "scientificName": "Echium vulgare",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Red Mason Bees",
                "Garden Bumblebees",
                "Painted Lady Butterflies"
            ],
            "benefits": "A magnet for long-tongued insects. Bright blue funnel flower spikes. Uniquely high daily nectar production rate.",
            "plantingTip": "Enjoys dry, sandy, gravelly, or chalky soils. Self-seeding; press seed gently into the surface of the soil during autumn.",
            "colorClass": "bg-wildflower",
            "description": "A spectacular biennial wildflower forming impressive tall spikes laden with vivid blue, funnel-shaped blossoms from June to September. Its bristly, lance-shaped leaves provide a textured backdrop.",
            "usages": "Ideal for unstructured meadow plantings, dry gravel beds, or rocky coastal margins. Often used to create dynamic vertical elements in dry situations.",
            "plantingTime": "Sow seeds directly in late summer or early autumn for germination the following spring."
        },
        {
            "name": "Hemp Agrimony",
            "scientificName": "Eupatorium cannabinum",
            "category": "Perennial",
            "height": "1 - 1.5 m",
            "pollinators": [
                "Butterflies",
                "Hoverflies"
            ],
            "benefits": "Frothy pink flower heads. Absolutely loved by autumn butterflies.",
            "plantingTip": "Prefers damp soils. Excellent near ponds or damp ditches.",
            "colorClass": "bg-wildflower",
            "description": "A substantial, robust marginal perennial reaching stately heights, topped with large, frothy clusters of soft pink or pale purplish flowers in late summer.",
            "usages": "Unbeatable for damp, boggy conditions or the margins of large ponds. A vital late-season nectar station for migratory butterflies.",
            "plantingTime": "Plant divisions or young plants during autumn or spring into moisture-retentive soils."
        },
        {
            "name": "Blackthorn",
            "scientificName": "Prunus spinosa",
            "category": "Tree/Shrub",
            "height": "Up to 4m",
            "pollinators": [
                "Early Bees",
                "Moths"
            ],
            "benefits": "Clouds of early white blossom. Produces sloes for winter birds.",
            "plantingTip": "Suckers strongly. Forms dense impenetrable thorny thicket.",
            "colorClass": "bg-tree",
            "description": "A densely branching, fiercely thorny shrub that precedes hawthorn by flowering on bare wood with pure white blossoms, later bearing astringent purple sloes.",
            "usages": "Fantastic mixed into hedgerows to create stock-proof, animal-friendly security thickets.",
            "plantingTime": "Plant bare-rooted in deep winter (Nov-Feb). Beware its tendency to sucker vigorously."
        },
        {
            "name": "Red Campion",
            "scientificName": "Silene dioica",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Long-tongued Bumblebees",
                "Hoverflies"
            ],
            "benefits": "Bright pink flowers. Vital spring nectar.",
            "plantingTip": "Adaptable, enjoys somewhat damp, fertile soils.",
            "colorClass": "bg-wildflower",
            "description": "An enduring, loosely branching perennial with slightly hairy, rounded leaves. Generates masses of striking rich pink, deeply notched blooms across the spring and summer.",
            "usages": "Flourishes wonderfully along hedge bottoms, dappled woodland walks, and informal herbaceous situations.",
            "plantingTime": "Sow outdoors in autumn or spring. Self-seeds very reliably in suitable soils."
        },
        {
            "name": "Primrose",
            "scientificName": "Primula vulgaris",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "Brimstone Butterflies",
                "Early Bees"
            ],
            "benefits": "Classic pale yellow spring flowers. Important early nectar source.",
            "plantingTip": "Needs moist, shady spots. Great under deciduous trees.",
            "colorClass": "bg-wildflower",
            "description": "A charming, low-lying perennial that carpets the early spring ground with pale, buttery yellow rosettes with a remarkably subtle, sweet fragrance.",
            "usages": "A staple for early nectar. Excels planted under deciduous trees, in lightly shaded borders, or tucked neatly into shady orchard grasses.",
            "plantingTime": "Buy 'in the green' directly after flowering in spring, or divide mature clumps in early autumn."
        },
        {
            "name": "Bluebell",
            "scientificName": "Hyacinthoides non-scripta",
            "category": "Bulb",
            "height": "20 - 40 cm",
            "pollinators": [
                "Brimstone",
                "Bees"
            ],
            "benefits": "Carpets ancient woodland in deep violet-blue. Scented.",
            "plantingTip": "Must ensure native stock (non-scripta), plant in autumn.",
            "colorClass": "bg-wildflower",
            "description": "A highly celebrated woodland bulb setting forth strap-like leaves and gently drooping, one-sided flower spikes filled with strongly scented, deep violet-blue bells.",
            "usages": "Creates magical woodland carpets under deciduous canopies and mature hedges. Essential to ensure pure native non-scripta forms are used.",
            "plantingTime": "Plant dormant bulbs deeply in the autumn, or lift and divide congested clumps 'in the green' late spring."
        },
        {
            "name": "Foxglove",
            "scientificName": "Digitalis purpurea",
            "category": "Biennial",
            "height": "1 - 2 m",
            "pollinators": [
                "Bumblebees",
                "Moths"
            ],
            "benefits": "Tall spires of purple-pink bells. Excellent for deep-throated bees.",
            "plantingTip": "Poisonous. Thrives in woodland edges and disturbed soils.",
            "colorClass": "bg-wildflower",
            "description": "A classic woodland biennial producing a magnificent, very tall vertical spire of nodding, tubular pink-purple flowers, heavily speckled on their interior lip.",
            "usages": "Brings architectural presence to the back of shaded borders, woodland edges, and dappled clearings. Do not plant near edible crops or ingest.",
            "plantingTime": "Sow seeds directly outdoors in late spring/early summer. Will produce rosettes year one, flowers year two."
        },
        {
            "name": "Common Sorrel",
            "scientificName": "Rumex acetosa",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": [
                "Small Copper Butterfly (Host)"
            ],
            "benefits": "Reddish flower spikes. Leaves are food for caterpillars.",
            "plantingTip": "Very easy to grow in meadow situations.",
            "colorClass": "bg-wildflower",
            "description": "A hardy, deep meadow perennial bearing arrow-shaped fleshy leaves extending into slender spikes of delicate, rusty-red flowering panicles reaching above the grass canopy.",
            "usages": "Edible, sharp-tasting foliage. In the wild garden setting, it specifically feeds specific metallic copper butterflies.",
            "plantingTime": "Sow freely into meadows, borders, or kitchen garden plots from early spring to late summer."
        },
        {
            "name": "Field Scabious",
            "scientificName": "Knautia arvensis",
            "category": "Perennial",
            "height": "60 - 100 cm",
            "pollinators": [
                "Butterflies",
                "Bees"
            ],
            "benefits": "Pincushion-like lilac flowers.",
            "plantingTip": "Thrives in dry, chalky or sandy soils.",
            "colorClass": "bg-wildflower",
            "description": "A robust, tall, rough-stemmed perennial carrying numerous delicate, flat, pincushion-like lilac-blue flower heads over a long, generous late summer season.",
            "usages": "Very open and airy, making it superb for drifting through tall meadow grasses and loose herbaceous borders.",
            "plantingTime": "Sow seeds in spring or early autumn, or split mature fleshy roots during late winter."
        },
        {
            "name": "Chicory",
            "scientificName": "Cichorium intybus",
            "category": "Perennial",
            "height": "1 - 1.5m",
            "pollinators": [
                "Bees",
                "Hoverflies"
            ],
            "benefits": "Stunning pure sky-blue daisy-like blooms.",
            "plantingTip": "Deep taproot prefers chalk and limestone margins.",
            "colorClass": "bg-wildflower",
            "description": "A stiff, erect, remarkably tall perennial. It bears rigid branching stems and striking, clear sky-blue daisy flowers that open in the morning and close by mid-afternoon.",
            "usages": "A beautiful structural plant for the rear of sunny, well-draining borders or wildflower meadows. Deep taproots tolerate severe drought.",
            "plantingTime": "Sow seeds in spring directly where they are to flower, as it heavily resents transplantation."
        }
    ],
    "south_part_shade": [
        {
            "name": "Viper's Bugloss",
            "scientificName": "Echium vulgare",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Red Mason Bees",
                "Garden Bumblebees",
                "Painted Lady Butterflies"
            ],
            "benefits": "A magnet for long-tongued insects. Bright blue funnel flower spikes. Uniquely high daily nectar production rate.",
            "plantingTip": "Enjoys dry, sandy, gravelly, or chalky soils. Self-seeding; press seed gently into the surface of the soil during autumn.",
            "colorClass": "bg-wildflower",
            "description": "A spectacular biennial wildflower forming impressive tall spikes laden with vivid blue, funnel-shaped blossoms from June to September. Its bristly, lance-shaped leaves provide a textured backdrop.",
            "usages": "Ideal for unstructured meadow plantings, dry gravel beds, or rocky coastal margins. Often used to create dynamic vertical elements in dry situations.",
            "plantingTime": "Sow seeds directly in late summer or early autumn for germination the following spring."
        },
        {
            "name": "Red Campion",
            "scientificName": "Silene dioica",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Long-tongued Bumblebees",
                "Hoverflies"
            ],
            "benefits": "Bright pink flowers. Vital spring nectar.",
            "plantingTip": "Adaptable, enjoys somewhat damp, fertile soils.",
            "colorClass": "bg-wildflower",
            "description": "An enduring, loosely branching perennial with slightly hairy, rounded leaves. Generates masses of striking rich pink, deeply notched blooms across the spring and summer.",
            "usages": "Flourishes wonderfully along hedge bottoms, dappled woodland walks, and informal herbaceous situations.",
            "plantingTime": "Sow outdoors in autumn or spring. Self-seeds very reliably in suitable soils."
        },
        {
            "name": "Snowdrop",
            "scientificName": "Galanthus nivalis",
            "category": "Bulb",
            "height": "10 - 15 cm",
            "pollinators": [
                "Earliest emerging bees"
            ],
            "benefits": "First flowers of the year. Essential lifeline for early wakers.",
            "plantingTip": "Plant 'in the green' just after flowering for best results.",
            "colorClass": "bg-wildflower",
            "description": "The ultimate harbinger of spring. These familiar tiny bulbs hoist perfect, intricate, inverted white drops, subtly marked with green on the inner segments.",
            "usages": "The cornerstone of any woodland garden, drifting under deciduous trees, hedges, and bare winter shrubs.",
            "plantingTime": "Must be planted 'in the green' (immediately after finishing flowering with leaves intact) for the highest success rate."
        },
        {
            "name": "Wild Garlic",
            "scientificName": "Allium ursinum",
            "category": "Bulb",
            "height": "20 - 45 cm",
            "pollinators": [
                "Hoverflies",
                "Bees",
                "Beetles"
            ],
            "benefits": "White starry flowers with strong garlic scent. Edible.",
            "plantingTip": "Spreads vigorously in damp shade woodland conditions.",
            "colorClass": "bg-wildflower",
            "description": "An energetic bulbous perennial. Known for lush, wide green lance-like leaves emitting a potent garlic aroma, topped with spectacular, starry white flower umbels.",
            "usages": "Creates enchanting drifts in damp, shaded woodland margins. A highly renowned forager's favourite for spring pestos.",
            "plantingTime": "Plant bulbs 'in the green' in spring or dry bulbs in late autumn into damp, leafy soil."
        },
        {
            "name": "Cowslip",
            "scientificName": "Primula veris",
            "category": "Perennial",
            "height": "15 - 30 cm",
            "pollinators": [
                "Early bees",
                "Butterflies"
            ],
            "benefits": "Nodding yellow bells. Classic meadow plant.",
            "plantingTip": "Does well in clay or chalky fields. Let seed before mowing.",
            "colorClass": "bg-wildflower",
            "description": "An iconic, much-loved native primula producing elegant, nodding clusters of deep yellow, bell-shaped, sweet-scented flowers on tall sturdy stems above rosette foliage.",
            "usages": "Classic component of historical meadow mixtures. Excels in grassy pastures, verges, or lightly managed wildlife lawns.",
            "plantingTime": "Plant plugs directly into grass in autumn for early spring establishment, or sow fresh seed over winter."
        },
        {
            "name": "Bugle",
            "scientificName": "Ajuga reptans",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "White-tailed Bumblebees"
            ],
            "benefits": "Spikes of blue flowers over dark semi-evergreen creeping foliage.",
            "plantingTip": "Excellent groundcover for damp or shaded soils.",
            "colorClass": "bg-wildflower",
            "description": "A mat-forming, creeping perennial throwing up short vertical spikes tightly packed with dark blue, two-lipped flowers above metallic or bronze trailing leaves.",
            "usages": "A hard-working ground cover for challenging damp, shaded spots, acting as a low, weed-suppressing carpet.",
            "plantingTime": "Plant plugs or divisions in spring or early autumn to establish rapid root cover."
        },
        {
            "name": "Yarrow",
            "scientificName": "Achillea millefolium",
            "category": "Perennial",
            "height": "30 - 50 cm",
            "pollinators": [
                "Small insects",
                "Hoverflies"
            ],
            "benefits": "Flat-topped white or pink flowerheads.",
            "plantingTip": "Drought resistant, spreads easily.",
            "colorClass": "bg-wildflower",
            "description": "A resilient, spreading perennial bearing feathery, aromatic, highly divided dark green leaves and wide, completely flat-topped clusters of minute white to pale pink flowers.",
            "usages": "A wonderful landing pad for beetles and hoverflies. Drought resistant and excellent for the front of dry, sandy borders.",
            "plantingTime": "Can be sown outdoors almost any time from spring to late summer on a finely raked surface."
        },
        {
            "name": "Wild Marjoram",
            "scientificName": "Origanum vulgare",
            "category": "Wildflower / Herb",
            "height": "20 - 50 cm",
            "pollinators": [
                "Common Blue Butterflies",
                "Gatekeeper Butterflies",
                "Honeybees",
                "Hoverflies"
            ],
            "benefits": "Aromatic pink flower heads. Supports a vast variety of butterflies and provides highly nutritious medicinal oils for visiting insects.",
            "plantingTip": "Thrives in dry, well-draining soils with alkaline pH. Trim back in late autumn after flowering to encourage fresh bushiness.",
            "colorClass": "bg-wildflower",
            "description": "A robust, bushy perennial herb with soft rounded leaves and clustered domed heads of tubular pinkish-purple flowers that act as a veritable feast for summer pollinators.",
            "usages": "Perfect for herb gardens, sunny borders, and gravel courtyards. The leaves can be used dried or fresh to season Mediterranean-style dishes.",
            "plantingTime": "Plant out small plugs in spring or sow seeds in well-draining soil from April to May."
        },
        {
            "name": "Sea Campion",
            "scientificName": "Silene uniflora",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "Moths",
                "Bees"
            ],
            "benefits": "Mat-forming with white balloon-like flowers.",
            "plantingTip": "Extremely tough, shingle/cliff specialist. Great in dry pots.",
            "colorClass": "bg-wildflower",
            "description": "Similar to Bladder Campion but forms a much lower, dense cascading mat of grey-green foliage studded with large white flowers containing deeply inflated, distinct sepals.",
            "usages": "Perfect for cascading over low walls, hanging from dry stone crevices, or framing paths in coastal gardens.",
            "plantingTime": "Sow seeds in spring or take soft cuttings from non-flowering shoots in early summer."
        },
        {
            "name": "Foxglove",
            "scientificName": "Digitalis purpurea",
            "category": "Biennial",
            "height": "1 - 2 m",
            "pollinators": [
                "Bumblebees",
                "Moths"
            ],
            "benefits": "Tall spires of purple-pink bells. Excellent for deep-throated bees.",
            "plantingTip": "Poisonous. Thrives in woodland edges and disturbed soils.",
            "colorClass": "bg-wildflower",
            "description": "A classic woodland biennial producing a magnificent, very tall vertical spire of nodding, tubular pink-purple flowers, heavily speckled on their interior lip.",
            "usages": "Brings architectural presence to the back of shaded borders, woodland edges, and dappled clearings. Do not plant near edible crops or ingest.",
            "plantingTime": "Sow seeds directly outdoors in late spring/early summer. Will produce rosettes year one, flowers year two."
        }
    ],
    "south_full_shade": [
        {
            "name": "Red Campion",
            "scientificName": "Silene dioica",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Long-tongued Bumblebees",
                "Hoverflies"
            ],
            "benefits": "Bright pink flowers. Vital spring nectar.",
            "plantingTip": "Adaptable, enjoys somewhat damp, fertile soils.",
            "colorClass": "bg-wildflower",
            "description": "An enduring, loosely branching perennial with slightly hairy, rounded leaves. Generates masses of striking rich pink, deeply notched blooms across the spring and summer.",
            "usages": "Flourishes wonderfully along hedge bottoms, dappled woodland walks, and informal herbaceous situations.",
            "plantingTime": "Sow outdoors in autumn or spring. Self-seeds very reliably in suitable soils."
        },
        {
            "name": "Primrose",
            "scientificName": "Primula vulgaris",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "Brimstone Butterflies",
                "Early Bees"
            ],
            "benefits": "Classic pale yellow spring flowers. Important early nectar source.",
            "plantingTip": "Needs moist, shady spots. Great under deciduous trees.",
            "colorClass": "bg-wildflower",
            "description": "A charming, low-lying perennial that carpets the early spring ground with pale, buttery yellow rosettes with a remarkably subtle, sweet fragrance.",
            "usages": "A staple for early nectar. Excels planted under deciduous trees, in lightly shaded borders, or tucked neatly into shady orchard grasses.",
            "plantingTime": "Buy 'in the green' directly after flowering in spring, or divide mature clumps in early autumn."
        },
        {
            "name": "Bluebell",
            "scientificName": "Hyacinthoides non-scripta",
            "category": "Bulb",
            "height": "20 - 40 cm",
            "pollinators": [
                "Brimstone",
                "Bees"
            ],
            "benefits": "Carpets ancient woodland in deep violet-blue. Scented.",
            "plantingTip": "Must ensure native stock (non-scripta), plant in autumn.",
            "colorClass": "bg-wildflower",
            "description": "A highly celebrated woodland bulb setting forth strap-like leaves and gently drooping, one-sided flower spikes filled with strongly scented, deep violet-blue bells.",
            "usages": "Creates magical woodland carpets under deciduous canopies and mature hedges. Essential to ensure pure native non-scripta forms are used.",
            "plantingTime": "Plant dormant bulbs deeply in the autumn, or lift and divide congested clumps 'in the green' late spring."
        },
        {
            "name": "Foxglove",
            "scientificName": "Digitalis purpurea",
            "category": "Biennial",
            "height": "1 - 2 m",
            "pollinators": [
                "Bumblebees",
                "Moths"
            ],
            "benefits": "Tall spires of purple-pink bells. Excellent for deep-throated bees.",
            "plantingTip": "Poisonous. Thrives in woodland edges and disturbed soils.",
            "colorClass": "bg-wildflower",
            "description": "A classic woodland biennial producing a magnificent, very tall vertical spire of nodding, tubular pink-purple flowers, heavily speckled on their interior lip.",
            "usages": "Brings architectural presence to the back of shaded borders, woodland edges, and dappled clearings. Do not plant near edible crops or ingest.",
            "plantingTime": "Sow seeds directly outdoors in late spring/early summer. Will produce rosettes year one, flowers year two."
        },
        {
            "name": "Snowdrop",
            "scientificName": "Galanthus nivalis",
            "category": "Bulb",
            "height": "10 - 15 cm",
            "pollinators": [
                "Earliest emerging bees"
            ],
            "benefits": "First flowers of the year. Essential lifeline for early wakers.",
            "plantingTip": "Plant 'in the green' just after flowering for best results.",
            "colorClass": "bg-wildflower",
            "description": "The ultimate harbinger of spring. These familiar tiny bulbs hoist perfect, intricate, inverted white drops, subtly marked with green on the inner segments.",
            "usages": "The cornerstone of any woodland garden, drifting under deciduous trees, hedges, and bare winter shrubs.",
            "plantingTime": "Must be planted 'in the green' (immediately after finishing flowering with leaves intact) for the highest success rate."
        },
        {
            "name": "Wild Garlic",
            "scientificName": "Allium ursinum",
            "category": "Bulb",
            "height": "20 - 45 cm",
            "pollinators": [
                "Hoverflies",
                "Bees",
                "Beetles"
            ],
            "benefits": "White starry flowers with strong garlic scent. Edible.",
            "plantingTip": "Spreads vigorously in damp shade woodland conditions.",
            "colorClass": "bg-wildflower",
            "description": "An energetic bulbous perennial. Known for lush, wide green lance-like leaves emitting a potent garlic aroma, topped with spectacular, starry white flower umbels.",
            "usages": "Creates enchanting drifts in damp, shaded woodland margins. A highly renowned forager's favourite for spring pestos.",
            "plantingTime": "Plant bulbs 'in the green' in spring or dry bulbs in late autumn into damp, leafy soil."
        },
        {
            "name": "Bugle",
            "scientificName": "Ajuga reptans",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "White-tailed Bumblebees"
            ],
            "benefits": "Spikes of blue flowers over dark semi-evergreen creeping foliage.",
            "plantingTip": "Excellent groundcover for damp or shaded soils.",
            "colorClass": "bg-wildflower",
            "description": "A mat-forming, creeping perennial throwing up short vertical spikes tightly packed with dark blue, two-lipped flowers above metallic or bronze trailing leaves.",
            "usages": "A hard-working ground cover for challenging damp, shaded spots, acting as a low, weed-suppressing carpet.",
            "plantingTime": "Plant plugs or divisions in spring or early autumn to establish rapid root cover."
        },
        {
            "name": "Lesser Celandine",
            "scientificName": "Ficaria verna",
            "category": "Perennial",
            "height": "5 - 15 cm",
            "pollinators": [
                "Early queen bumblebees"
            ],
            "benefits": "Bright yellow stars in earliest spring.",
            "plantingTip": "Dies back in summer. Beware of spreading in small borders.",
            "colorClass": "bg-wildflower",
            "description": "A ground-hugging perennial bearing very shiny, heart-shaped leaves and highly reflective bright yellow star-flowers that herald the end of winter.",
            "usages": "Useful as rapid early spring ground cover under heavily shaded hedges or deciduous trees.",
            "plantingTime": "Plant the small tuberous roots 'in the green' in late spring or as dormant bulbils in autumn."
        },
        {
            "name": "Wood Anemone",
            "scientificName": "Anemone nemorosa",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "Hoverflies"
            ],
            "benefits": "White star-like flowers. Indicates ancient woodland.",
            "plantingTip": "Plant slowly spreading rhizomes in autumn in leaf mould.",
            "colorClass": "bg-wildflower",
            "description": "A low, carpeting herbaceous perennial that spreads slowly using rhizomes. It throws up solitary, starry white flowers often delicately flushed with pink on their undersides.",
            "usages": "Perfect for naturalising under deciduous trees and shrubs where it catches early spring light before full canopy cover.",
            "plantingTime": "Best planted as dormant rhizomes in late summer or autumn, burying them gently in rich leaf mould."
        },
        {
            "name": "Ivy",
            "scientificName": "Hedera helix",
            "category": "Climber",
            "height": "Up to 20m",
            "pollinators": [
                "Late season bees",
                "Wasps",
                "Hoverflies"
            ],
            "benefits": "Crucial late autumn nectar source. Berries feed birds in late winter.",
            "plantingTip": "Can be invasive if unchecked. Mature climbing forms produce flowers.",
            "colorClass": "bg-shrub",
            "description": "An evergreen, woody climber clinging via aerial roots. Mature forms morph into bushy, non-climbing branches that produce spherical umbels of vital late-season yellowish green flowers.",
            "usages": "Critical late nectar resource for wasps and bees before winter. Provides irreplaceable dense, warm nesting shelter for birds.",
            "plantingTime": "Plant year-round, ideally in autumn or spring, checking vigorously if grown near structural brickwork."
        }
    ],
    "south_dappled": [
        {
            "name": "Viper's Bugloss",
            "scientificName": "Echium vulgare",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Red Mason Bees",
                "Garden Bumblebees",
                "Painted Lady Butterflies"
            ],
            "benefits": "A magnet for long-tongued insects. Bright blue funnel flower spikes. Uniquely high daily nectar production rate.",
            "plantingTip": "Enjoys dry, sandy, gravelly, or chalky soils. Self-seeding; press seed gently into the surface of the soil during autumn.",
            "colorClass": "bg-wildflower",
            "description": "A spectacular biennial wildflower forming impressive tall spikes laden with vivid blue, funnel-shaped blossoms from June to September. Its bristly, lance-shaped leaves provide a textured backdrop.",
            "usages": "Ideal for unstructured meadow plantings, dry gravel beds, or rocky coastal margins. Often used to create dynamic vertical elements in dry situations.",
            "plantingTime": "Sow seeds directly in late summer or early autumn for germination the following spring."
        },
        {
            "name": "Gorse",
            "scientificName": "Ulex europaeus",
            "category": "Shrub",
            "height": "1 - 2.5 m",
            "pollinators": [
                "Early Bees"
            ],
            "benefits": "Spiny evergreen. Yellow coconut-scented flowers appearing even in winter.",
            "plantingTip": "Extremely tough, poor soil specialist. Avoid rich garden soil.",
            "colorClass": "bg-shrub",
            "description": "A dense, famously prickly native evergreen shrub forming impenetrable thickets. Yields masses of bright golden pea-flowers boasting a rich coconut aroma in early spring, or almost year-round.",
            "usages": "Exceptional for exposed coastal belts or high moorlands, forming severe, excellent stock-proof boundary windbreaks and cover for small nesting birds.",
            "plantingTime": "Only plant extremely small potted specimens during winter or very early spring, avoiding root disturbance entirely."
        },
        {
            "name": "White Dead-nettle",
            "scientificName": "Lamium album",
            "category": "Perennial",
            "height": "20 - 50 cm",
            "pollinators": [
                "Bumblebees"
            ],
            "benefits": "Non-stinging nettle lookalike. Very early nectar.",
            "plantingTip": "Tolerates shade well. Rapidly spreads in woodland edges.",
            "colorClass": "bg-wildflower",
            "description": "A robust perennial that superficially mimics stinging nettles but carries no sting. Produces large whorls of beautiful lipped, gleaming white flowers on square stems.",
            "usages": "A phenomenal plant for difficult, shady wasteland, base of overgrown hedges, and the edges of wooded plots.",
            "plantingTime": "Divide the rapidly spreading aggressive rootstocks in cold late autumn or early spring."
        },
        {
            "name": "Common Sorrel",
            "scientificName": "Rumex acetosa",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": [
                "Small Copper Butterfly (Host)"
            ],
            "benefits": "Reddish flower spikes. Leaves are food for caterpillars.",
            "plantingTip": "Very easy to grow in meadow situations.",
            "colorClass": "bg-wildflower",
            "description": "A hardy, deep meadow perennial bearing arrow-shaped fleshy leaves extending into slender spikes of delicate, rusty-red flowering panicles reaching above the grass canopy.",
            "usages": "Edible, sharp-tasting foliage. In the wild garden setting, it specifically feeds specific metallic copper butterflies.",
            "plantingTime": "Sow freely into meadows, borders, or kitchen garden plots from early spring to late summer."
        },
        {
            "name": "Silverweed",
            "scientificName": "Potentilla anserina",
            "category": "Perennial",
            "height": "5 - 15 cm",
            "pollinators": [
                "Hoverflies"
            ],
            "benefits": "Silvery fern-like leaves with bright yellow saucer flowers.",
            "plantingTip": "Tolerates compacted soil and coastal conditions.",
            "colorClass": "bg-wildflower",
            "description": "A creeping, stolon-forming low perennial distinguished deeply by its heavily toothed, incredibly tactile silver-haired leaves. Bears solitary beautiful golden five-petalled flowers tight to the ground.",
            "usages": "Useful resilient groundcover for compacted, difficult areas with foot traffic such as grass verges, dunes, or dry pathsides.",
            "plantingTime": "Divide running stolons incredibly easily in damp autumn or early spring directly into their new home."
        },
        {
            "name": "Wild Teasel",
            "scientificName": "Dipsacus fullonum",
            "category": "Biennial",
            "height": "1 - 2 m",
            "pollinators": [
                "Goldfinches (seeds)",
                "Bees"
            ],
            "benefits": "Spiky heads trap water. Superb seed source for birds in winter.",
            "plantingTip": "Self-seeds readily. Leave standing through the winter.",
            "colorClass": "bg-wildflower",
            "description": "A tall, architectural biennial native with distinct thorny stems and large, cone-shaped spiky flower heads decorated with delicate lilac bands of bloom.",
            "usages": "A masterpiece for winter architecture in the garden. The seed heads provide a vital food source for overwintering finches.",
            "plantingTime": "Sow in spring or early summer directly into its final position, as its deep taproot dislikes being moved."
        },
        {
            "name": "Dog Rose",
            "scientificName": "Rosa canina",
            "category": "Shrub",
            "height": "Up to 3m",
            "pollinators": [
                "Bees",
                "Birds (hips)"
            ],
            "benefits": "Large pale pink/white flowers followed by red hips.",
            "plantingTip": "Thorny scrambling shrub. Best for larger hedgerows.",
            "colorClass": "bg-shrub",
            "description": "A vigorous, scrambling deciduous shrub bearing thorny stems and scattered with wonderfully delicate, large single pink or white rose blooms, transforming into bright red hips.",
            "usages": "Essential for mixed native hedgerows. Provides nesting thickets for small birds and food sources extending late into winter.",
            "plantingTime": "Plant bare-root whips between November and March while fully dormant."
        },
        {
            "name": "Yarrow",
            "scientificName": "Achillea millefolium",
            "category": "Perennial",
            "height": "30 - 50 cm",
            "pollinators": [
                "Small insects",
                "Hoverflies"
            ],
            "benefits": "Flat-topped white or pink flowerheads.",
            "plantingTip": "Drought resistant, spreads easily.",
            "colorClass": "bg-wildflower",
            "description": "A resilient, spreading perennial bearing feathery, aromatic, highly divided dark green leaves and wide, completely flat-topped clusters of minute white to pale pink flowers.",
            "usages": "A wonderful landing pad for beetles and hoverflies. Drought resistant and excellent for the front of dry, sandy borders.",
            "plantingTime": "Can be sown outdoors almost any time from spring to late summer on a finely raked surface."
        },
        {
            "name": "Hemp Agrimony",
            "scientificName": "Eupatorium cannabinum",
            "category": "Perennial",
            "height": "1 - 1.5 m",
            "pollinators": [
                "Butterflies",
                "Hoverflies"
            ],
            "benefits": "Frothy pink flower heads. Absolutely loved by autumn butterflies.",
            "plantingTip": "Prefers damp soils. Excellent near ponds or damp ditches.",
            "colorClass": "bg-wildflower",
            "description": "A substantial, robust marginal perennial reaching stately heights, topped with large, frothy clusters of soft pink or pale purplish flowers in late summer.",
            "usages": "Unbeatable for damp, boggy conditions or the margins of large ponds. A vital late-season nectar station for migratory butterflies.",
            "plantingTime": "Plant divisions or young plants during autumn or spring into moisture-retentive soils."
        },
        {
            "name": "Selfheal",
            "scientificName": "Prunella vulgaris",
            "category": "Perennial",
            "height": "5 - 20 cm",
            "pollinators": [
                "Bees",
                "Butterflies"
            ],
            "benefits": "Low-growing purple flowers, great for lawns.",
            "plantingTip": "Tolerates mowing if blades are set high.",
            "colorClass": "bg-wildflower",
            "description": "A creeping, low, dense perennial that easily integrates into fine turf, pushing up sturdy, short chunky heads of deep violet, tightly whorled tubular flowers.",
            "usages": "One of the best native additions for eco-lawns or flowering tapestries. Survives normal mower heights easily.",
            "plantingTime": "Sow direct into scarified lawn patches in autumn or use small plugs in early spring."
        }
    ],
    "north_scot_full_sun": [
        {
            "name": "Field Forget-me-not",
            "scientificName": "Myosotis arvensis",
            "category": "Wildflower",
            "height": "10 - 40 cm",
            "pollinators": ["Bees", "Hoverflies", "Butterflies"],
            "benefits": "Produces tiny, beautiful sky-blue flowers.",
            "plantingTip": "Easily self-seeds. Can be used in meadows or borders.",
            "colorClass": "bg-wildflower",
            "description": "A delicate, hairy annual or short-lived perennial with tiny, typically azure-blue flowers featuring yellow centres. It forms low, expanding mounds of foliage.",
            "usages": "Ideal for softening edges, underplanting, and creating naturalised drifts.",
            "plantingTime": "Sow seeds in spring or autumn."
        },
        {
            "name": "Corn Marigold",
            "scientificName": "Glebionis segetum",
            "category": "Wildflower",
            "height": "30 - 60 cm",
            "pollinators": ["Bees", "Hoverflies"],
            "benefits": "Vibrant golden-yellow daisy-like flowers that bloom for a long period.",
            "plantingTip": "Needs disturbed soil to germinate. Often sown as part of a cornfield annual mix.",
            "colorClass": "bg-wildflower",
            "description": "A striking native annual sporting brilliant golden-yellow flower heads and distinctive blue-green, slightly fleshy, deeply lobed leaves.",
            "usages": "Excellent for annual meadow mixes and vibrant summer colour.",
            "plantingTime": "Sow directly into bare soil in spring or autumn."
        },
        {
            "name": "Wild Carrot",
            "scientificName": "Daucus carota",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": ["Hoverflies", "Bees", "Beetles"],
            "benefits": "Intricate, flat-topped clusters of tiny white flowers, sometimes with a single red flower in the centre.",
            "plantingTip": "Thrives in well-drained, nutrient-poor soils.",
            "colorClass": "bg-wildflower",
            "description": "An upright biennial bearing feathery foliage and stunning umbels of delicate white flowers. The flower heads curl inward as they go to seed, forming a characteristic 'bird's nest' shape.",
            "usages": "Valuable in wildflower meadows and for attracting predatory insects.",
            "plantingTime": "Sow seeds in late summer or autumn."
        },
        {
            "name": "Red Clover",
            "scientificName": "Trifolium pratense",
            "category": "Wildflower",
            "height": "15 - 40 cm",
            "pollinators": ["Bumblebees", "Butterflies", "Moths"],
            "benefits": "A highly valuable nectar source and excellent nitrogen fixer for the soil.",
            "plantingTip": "Tolerates most soils. Great for meadow lawns.",
            "colorClass": "bg-wildflower",
            "description": "A familiar meadow perennial with distinctive trefoil leaves (often bearing a white crescent marking) and pinkish-red, globe-shaped flower heads.",
            "usages": "Important component of wildlife lawns, meadows, and agricultural leys.",
            "plantingTime": "Sow in spring or autumn."
        },
        {
            "name": "White Campion",
            "scientificName": "Silene latifolia",
            "category": "Wildflower",
            "height": "30 - 100 cm",
            "pollinators": ["Moths"],
            "benefits": "Flowers emit a sweet clove-like scent in the evening to attract night-flying moths.",
            "plantingTip": "Well-drained soil in full sun or part shade.",
            "colorClass": "bg-wildflower",
            "description": "An upright, slightly hairy perennial with opposite leaves and pure white, deeply notched petals on flowers that open fully in the late afternoon.",
            "usages": "Perfect for night gardens and supporting nocturnal pollinator populations.",
            "plantingTime": "Sow seeds in spring or autumn."
        },
        {
            "name": "Betony",
            "scientificName": "Betonica officinalis",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": ["Bees", "Butterflies", "Hoverflies"],
            "benefits": "Striking magenta-purple flower spikes above neat rosettes of scalloped leaves.",
            "plantingTip": "Grows well in heavy clay or moderately fertile soils.",
            "colorClass": "bg-wildflower",
            "description": "A very attractive native perennial of grasslands and open woods, producing dense, short spikes of vivid purplish-red hooded flowers on square stems.",
            "usages": "Ideal for herbaceous borders, meadow planting, and traditional herb gardens.",
            "plantingTime": "Plant out from spring to autumn."
        },
        {
            "name": "Common Mallow",
            "scientificName": "Malva sylvestris",
            "category": "Perennial",
            "height": "60 - 120 cm",
            "pollinators": ["Bees", "Hoverflies"],
            "benefits": "Showy deep pink-purple flowers with dark veins, blooming profusely through summer.",
            "plantingTip": "Very easily grown in most soils. Can self-seed vigorously.",
            "colorClass": "bg-wildflower",
            "description": "A robust, bushy perennial with deeply lobed leaves and highly attractive, large, pink-purple flowers streaked with darker veins.",
            "usages": "Excellent for sunny banks, borders, and cottage garden styles.",
            "plantingTime": "Sow seeds or plant out in spring."
        },
        {
            "name": "Yellow Horned Poppy",
            "scientificName": "Glaucium flavum",
            "category": "Perennial",
            "height": "30 - 90 cm",
            "pollinators": ["Bees", "Hoverflies"],
            "benefits": "Striking silvery-blue foliage and large, bright yellow flowers.",
            "plantingTip": "Needs extremely well-drained, sandy or shingly soil. Found naturally on coasts.",
            "colorClass": "bg-wildflower",
            "description": "A spectacular coastal perennial known for its beautiful glaucous wavy leaves, large brilliant yellow poppy flowers, and extremely long curved seed pods.",
            "usages": "Perfect for gravel gardens, coastal exposures, and dry sandy beds.",
            "plantingTime": "Sow seeds in autumn or spring."
        },
        {
            "name": "Wild Strawberry",
            "scientificName": "Fragaria vesca",
            "category": "Perennial",
            "height": "10 - 30 cm",
            "pollinators": ["Small Bees", "Hoverflies"],
            "benefits": "Provides ground cover and small, intensely sweet, edible fruits.",
            "plantingTip": "Great for dappled woodland shade or edging borders.",
            "colorClass": "bg-wildflower",
            "description": "A creeping perennial that spreads by stolons, featuring small white flowers followed by distinctive, tiny, highly aromatic red strawberries.",
            "usages": "Excellent edible ground cover for woodland gardens or underplanting.",
            "plantingTime": "Plant runners or sow seeds in spring or autumn."
        },
        {
            "name": "Greater Knapweed",
            "scientificName": "Centaurea scabiosa",
            "category": "Perennial",
            "height": "50 - 90 cm",
            "pollinators": ["Butterflies", "Bumblebees", "Finches"],
            "benefits": "Large, showy, thistle-like magenta flower heads without the spines.",
            "plantingTip": "Thrives on chalky or limestone soils in full sun.",
            "colorClass": "bg-wildflower",
            "description": "A robust, deep-rooted perennial with deeply pinnate leaves and large, prominent magenta-purple flower heads surrounded by a dark fringed involucre.",
            "usages": "Fantastic for chalk downland meadows and a magnet for butterflies.",
            "plantingTime": "Plant bare-root or potted specimens in spring or autumn."
        },
        {
            "name": "Guelder Rose",
            "scientificName": "Viburnum opulus",
            "category": "Shrub",
            "height": "2 - 4 m",
            "pollinators": [
                "Hoverflies",
                "Moths",
                "Bees"
            ],
            "benefits": "Spectacular lacecap white flowers in spring, followed by translucent red berries.",
            "plantingTip": "Prefers damp, reasonably fertile soils. Beautiful when mixed into native hedgerows.",
            "colorClass": "bg-tree",
            "description": "A glorious native deciduous shrub that features maple-like lobed leaves. In late spring it produces flat heads of creamy-white flowers, turning to ruby-red berries in autumn.",
            "usages": "Essential for wildlife-friendly hedging or damp woodland edges.",
            "plantingTime": "Plant bare-root between November and March."
        },
        {
            "name": "Meadowsweet",
            "scientificName": "Filipendula ulmaria",
            "category": "Perennial",
            "height": "60 - 120 cm",
            "pollinators": [
                "Bees",
                "Hoverflies"
            ],
            "benefits": "Produces large, fluffy, sweetly scented clouds of cream flowers.",
            "plantingTip": "Requires moist soil; thrives alongside ponds or wet ditches.",
            "colorClass": "bg-wildflower",
            "description": "A tall, majestic damp-meadow perennial with distinctively veined, dark green leaflets and dense, frothy clusters of almond-scented creamy-white flowers.",
            "usages": "Unbeatable for bog gardens and damp meadow plantings.",
            "plantingTime": "Plant out in spring or autumn into reliably moist soil."
        },
        {
            "name": "Common Comfrey",
            "scientificName": "Symphytum officinale",
            "category": "Perennial",
            "height": "80 - 120 cm",
            "pollinators": [
                "Bumblebees",
                "Mason Bees"
            ],
            "benefits": "One of the most powerful nectar producers. Tubular bell flowers recharge nectar rapidly.",
            "plantingTip": "Has a deep taproot. Do not plant where you might want to remove it later.",
            "colorClass": "bg-wildflower",
            "description": "A vigorous, bristly perennial that forms large clumps. Through summer it unfurls characteristic drooping clusters of tubular flowers.",
            "usages": "Incredible for bumblebees. Leaves can be harvested to make exceptionally rich liquid organic fertilizer.",
            "plantingTime": "Sow seeds or plant root cuttings in spring."
        },
        {
            "name": "Yellow Flag Iris",
            "scientificName": "Iris pseudacorus",
            "category": "Perennial",
            "height": "1 - 1.5 m",
            "pollinators": [
                "Hoverflies",
                "Long-tongued Bees"
            ],
            "benefits": "Striking architectural foliage and massive bright yellow summer blooms.",
            "plantingTip": "Can be incredibly vigorous in shallow water. Submerge in aquatic baskets to restrict spread.",
            "colorClass": "bg-wildflower",
            "description": "A bold, robust aquatic and marginal perennial featuring tall, sword-like leaves and vivid yellow flowers.",
            "usages": "Perfect for large wildlife ponds. Provides vital emergence supports for aquatic dragonfly nymphs.",
            "plantingTime": "Plant rhizomes just below the soil surface in spring."
        },
        {
            "name": "Cuckooflower",
            "scientificName": "Cardamine pratensis",
            "category": "Perennial",
            "height": "30 - 50 cm",
            "pollinators": [
                "Orange-tip Butterfly (Host)"
            ],
            "benefits": "The primary larval food plant for the iconic Orange-tip butterfly.",
            "plantingTip": "Prefers consistently damp grass or meadow conditions. Do not mow until mid-summer.",
            "colorClass": "bg-wildflower",
            "description": "Also known as Lady's Smock, this delicate, moisture-loving perennial puts up slender stems holding pale lilac flowers around the time the first cuckoos are heard.",
            "usages": "Crucial for wetland or damp meadow restoration.",
            "plantingTime": "Plant 'in the green' in spring or sow fresh seed in late summer."
        },
        {
            "name": "Herb Robert",
            "scientificName": "Geranium robertianum",
            "category": "Perennial",
            "height": "20 - 40 cm",
            "pollinators": [
                "Small Bees",
                "Hoverflies"
            ],
            "benefits": "Adaptable scrambling foliage that often turns deep crimson. Tiny bright pink flowers.",
            "plantingTip": "Self-seeds prolifically in shady, dry, or awkward spots.",
            "colorClass": "bg-wildflower",
            "description": "A common but valuable native woodland geranium with fern-like leaves on reddish stems. It produces starry vivid pink flowers.",
            "usages": "Excellent for dry shade, underplanting hedges, or filling gaps in stony ground.",
            "plantingTime": "Sow seeds from spring to late summer."
        },
        {
            "name": "Viper's Bugloss",
            "scientificName": "Echium vulgare",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Red Mason Bees",
                "Garden Bumblebees",
                "Painted Lady Butterflies"
            ],
            "benefits": "A magnet for long-tongued insects. Bright blue funnel flower spikes. Uniquely high daily nectar production rate.",
            "plantingTip": "Enjoys dry, sandy, gravelly, or chalky soils. Self-seeding; press seed gently into the surface of the soil during autumn.",
            "colorClass": "bg-wildflower",
            "description": "A spectacular biennial wildflower forming impressive tall spikes laden with vivid blue, funnel-shaped blossoms from June to September. Its bristly, lance-shaped leaves provide a textured backdrop.",
            "usages": "Ideal for unstructured meadow plantings, dry gravel beds, or rocky coastal margins. Often used to create dynamic vertical elements in dry situations.",
            "plantingTime": "Sow seeds directly in late summer or early autumn for germination the following spring."
        },
        {
            "name": "Lesser Celandine",
            "scientificName": "Ficaria verna",
            "category": "Perennial",
            "height": "5 - 15 cm",
            "pollinators": [
                "Early queen bumblebees"
            ],
            "benefits": "Bright yellow stars in earliest spring.",
            "plantingTip": "Dies back in summer. Beware of spreading in small borders.",
            "colorClass": "bg-wildflower",
            "description": "A ground-hugging perennial bearing very shiny, heart-shaped leaves and highly reflective bright yellow star-flowers that herald the end of winter.",
            "usages": "Useful as rapid early spring ground cover under heavily shaded hedges or deciduous trees.",
            "plantingTime": "Plant the small tuberous roots 'in the green' in late spring or as dormant bulbils in autumn."
        },
        {
            "name": "Wild Thyme",
            "scientificName": "Thymus polytrichus",
            "category": "Herb",
            "height": "5 - 10 cm",
            "pollinators": [
                "Honeybees",
                "Butterflies"
            ],
            "benefits": "Creeping aromatic mat. Pink flowers are a magnet for bees.",
            "plantingTip": "Needs sun and good drainage. Ideal between paving stones.",
            "colorClass": "bg-wildflower",
            "description": "A creeping, low sub-shrub with tiny evergreen aromatic leaves. Completely blankets the ground with miniature tubular rosy-purple flowers that hum persistently with insect activity.",
            "usages": "An aromatic highlight for gravel paths, green roofs, and crevice gardens. Yields scent powerfully when walked upon gently.",
            "plantingTime": "Plant plugs or potted plants from mid-spring, ensuring completely free drainage around the root collar."
        },
        {
            "name": "Dog Rose",
            "scientificName": "Rosa canina",
            "category": "Shrub",
            "height": "Up to 3m",
            "pollinators": [
                "Bees",
                "Birds (hips)"
            ],
            "benefits": "Large pale pink/white flowers followed by red hips.",
            "plantingTip": "Thorny scrambling shrub. Best for larger hedgerows.",
            "colorClass": "bg-shrub",
            "description": "A vigorous, scrambling deciduous shrub bearing thorny stems and scattered with wonderfully delicate, large single pink or white rose blooms, transforming into bright red hips.",
            "usages": "Essential for mixed native hedgerows. Provides nesting thickets for small birds and food sources extending late into winter.",
            "plantingTime": "Plant bare-root whips between November and March while fully dormant."
        },
        {
            "name": "Yellow Rattle",
            "scientificName": "Rhinanthus minor",
            "category": "Wildflower",
            "height": "10 - 50 cm",
            "pollinators": [
                "Bumblebees"
            ],
            "benefits": "Parasitic on grasses, allowing other wildflowers to thrive.",
            "plantingTip": "Scatter onto scarified short grass in autumn.",
            "colorClass": "bg-wildflower",
            "description": "An attractive semi-parasitic meadow plant with bright yellow, trumpet-shaped flowers. As seed pods dry, they rattle audibly in the wind.",
            "usages": "Critical for establishing wildflower meadows. It parasitises competitive coarse grasses, weakening them and allowing delicate wildflowers space to grow.",
            "plantingTime": "Must be sown in autumn (September-November). Seeds require winter chilling (stratification) to trigger germination."
        },
        {
            "name": "Meadow Cranesbill",
            "scientificName": "Geranium pratense",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": [
                "Bumblebees",
                "Solitary Bees"
            ],
            "benefits": "Large saucer-shaped blue-purple flowers.",
            "plantingTip": "Loves moist but well-drained soils in meadows or borders.",
            "colorClass": "bg-wildflower",
            "description": "A loose, scrambling perennial displaying deeply lobed foliage and carrying quantities of luminous violet-blue saucer-shaped flowers atop elegant stems.",
            "usages": "Wonderful for weaving through loosely woven herbaceous borders or incorporating into grassy wildflower plantings where it can naturally tumble.",
            "plantingTime": "Plant as young plugs in autumn or spring. Can also be sown under glass in early spring."
        },
        {
            "name": "Purple Loosestrife",
            "scientificName": "Lythrum salicaria",
            "category": "Perennial",
            "height": "1 - 1.5 m",
            "pollinators": [
                "Long-tongued bees",
                "Butterflies"
            ],
            "benefits": "Tall striking magenta spikes. Perfect for wetlands.",
            "plantingTip": "Must have moist or boggy ground. Spreads readily.",
            "colorClass": "bg-wildflower",
            "description": "A striking marginal aquatic perennial forming substantial bushy clumps of willow-like leaves topped by towering, closely packed spires of rich magenta blooms.",
            "usages": "Superb architectural presence for ponds, streamsides, or bog gardens. Combats soil erosion in riparian zones.",
            "plantingTime": "Plant directly into wet mud at the water's edge in spring or autumn."
        },
        {
            "name": "Toadflax",
            "scientificName": "Linaria vulgaris",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": [
                "Bumblebees"
            ],
            "benefits": "Yellow snapdragon-like flowers with orange centres.",
            "plantingTip": "Spreads easily, good for waste ground or stony areas.",
            "colorClass": "bg-wildflower",
            "description": "An upright, branching perennial mimicking miniature yellow and orange snapdragons. It throws vertical spikes carrying these incredibly vibrant, small-scaled blooms densely.",
            "usages": "Highly beneficial for difficult areas facing steep dry conditions, like rough banks, gravel, or railway borders.",
            "plantingTime": "Sow direct thinly in spring once soils warm up fully."
        },
        {
            "name": "Sea Holly",
            "scientificName": "Eryngium maritimum",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": [
                "Many insects"
            ],
            "benefits": "Striking metallic blue thistle-like foliage.",
            "plantingTip": "Requires light, sandy, well-draining soil. Coastal favourite.",
            "colorClass": "bg-wildflower",
            "description": "A striking coastal native that almost resembles a metallic sculpture. It sports stiff, waxy, grey-blue glaucous foliage armed with spines and beautiful blue thistle-like structures.",
            "usages": "Outstanding architectural plant for dry, sunny gravel gardens and arid, sandy coastal borders.",
            "plantingTime": "Plant outside in spring in deep, sandy or very well-drained soil to accommodate its taproot."
        },
        {
            "name": "Wild Marjoram",
            "scientificName": "Origanum vulgare",
            "category": "Wildflower / Herb",
            "height": "20 - 50 cm",
            "pollinators": [
                "Common Blue Butterflies",
                "Gatekeeper Butterflies",
                "Honeybees",
                "Hoverflies"
            ],
            "benefits": "Aromatic pink flower heads. Supports a vast variety of butterflies and provides highly nutritious medicinal oils for visiting insects.",
            "plantingTip": "Thrives in dry, well-draining soils with alkaline pH. Trim back in late autumn after flowering to encourage fresh bushiness.",
            "colorClass": "bg-wildflower",
            "description": "A robust, bushy perennial herb with soft rounded leaves and clustered domed heads of tubular pinkish-purple flowers that act as a veritable feast for summer pollinators.",
            "usages": "Perfect for herb gardens, sunny borders, and gravel courtyards. The leaves can be used dried or fresh to season Mediterranean-style dishes.",
            "plantingTime": "Plant out small plugs in spring or sow seeds in well-draining soil from April to May."
        }
    ],
    "north_scot_part_sun": [
        {
            "name": "Viper's Bugloss",
            "scientificName": "Echium vulgare",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Red Mason Bees",
                "Garden Bumblebees",
                "Painted Lady Butterflies"
            ],
            "benefits": "A magnet for long-tongued insects. Bright blue funnel flower spikes. Uniquely high daily nectar production rate.",
            "plantingTip": "Enjoys dry, sandy, gravelly, or chalky soils. Self-seeding; press seed gently into the surface of the soil during autumn.",
            "colorClass": "bg-wildflower",
            "description": "A spectacular biennial wildflower forming impressive tall spikes laden with vivid blue, funnel-shaped blossoms from June to September. Its bristly, lance-shaped leaves provide a textured backdrop.",
            "usages": "Ideal for unstructured meadow plantings, dry gravel beds, or rocky coastal margins. Often used to create dynamic vertical elements in dry situations.",
            "plantingTime": "Sow seeds directly in late summer or early autumn for germination the following spring."
        },
        {
            "name": "Lesser Celandine",
            "scientificName": "Ficaria verna",
            "category": "Perennial",
            "height": "5 - 15 cm",
            "pollinators": [
                "Early queen bumblebees"
            ],
            "benefits": "Bright yellow stars in earliest spring.",
            "plantingTip": "Dies back in summer. Beware of spreading in small borders.",
            "colorClass": "bg-wildflower",
            "description": "A ground-hugging perennial bearing very shiny, heart-shaped leaves and highly reflective bright yellow star-flowers that herald the end of winter.",
            "usages": "Useful as rapid early spring ground cover under heavily shaded hedges or deciduous trees.",
            "plantingTime": "Plant the small tuberous roots 'in the green' in late spring or as dormant bulbils in autumn."
        },
        {
            "name": "Wild Thyme",
            "scientificName": "Thymus polytrichus",
            "category": "Herb",
            "height": "5 - 10 cm",
            "pollinators": [
                "Honeybees",
                "Butterflies"
            ],
            "benefits": "Creeping aromatic mat. Pink flowers are a magnet for bees.",
            "plantingTip": "Needs sun and good drainage. Ideal between paving stones.",
            "colorClass": "bg-wildflower",
            "description": "A creeping, low sub-shrub with tiny evergreen aromatic leaves. Completely blankets the ground with miniature tubular rosy-purple flowers that hum persistently with insect activity.",
            "usages": "An aromatic highlight for gravel paths, green roofs, and crevice gardens. Yields scent powerfully when walked upon gently.",
            "plantingTime": "Plant plugs or potted plants from mid-spring, ensuring completely free drainage around the root collar."
        },
        {
            "name": "Dog Rose",
            "scientificName": "Rosa canina",
            "category": "Shrub",
            "height": "Up to 3m",
            "pollinators": [
                "Bees",
                "Birds (hips)"
            ],
            "benefits": "Large pale pink/white flowers followed by red hips.",
            "plantingTip": "Thorny scrambling shrub. Best for larger hedgerows.",
            "colorClass": "bg-shrub",
            "description": "A vigorous, scrambling deciduous shrub bearing thorny stems and scattered with wonderfully delicate, large single pink or white rose blooms, transforming into bright red hips.",
            "usages": "Essential for mixed native hedgerows. Provides nesting thickets for small birds and food sources extending late into winter.",
            "plantingTime": "Plant bare-root whips between November and March while fully dormant."
        },
        {
            "name": "Yellow Rattle",
            "scientificName": "Rhinanthus minor",
            "category": "Wildflower",
            "height": "10 - 50 cm",
            "pollinators": [
                "Bumblebees"
            ],
            "benefits": "Parasitic on grasses, allowing other wildflowers to thrive.",
            "plantingTip": "Scatter onto scarified short grass in autumn.",
            "colorClass": "bg-wildflower",
            "description": "An attractive semi-parasitic meadow plant with bright yellow, trumpet-shaped flowers. As seed pods dry, they rattle audibly in the wind.",
            "usages": "Critical for establishing wildflower meadows. It parasitises competitive coarse grasses, weakening them and allowing delicate wildflowers space to grow.",
            "plantingTime": "Must be sown in autumn (September-November). Seeds require winter chilling (stratification) to trigger germination."
        },
        {
            "name": "Meadow Cranesbill",
            "scientificName": "Geranium pratense",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": [
                "Bumblebees",
                "Solitary Bees"
            ],
            "benefits": "Large saucer-shaped blue-purple flowers.",
            "plantingTip": "Loves moist but well-drained soils in meadows or borders.",
            "colorClass": "bg-wildflower",
            "description": "A loose, scrambling perennial displaying deeply lobed foliage and carrying quantities of luminous violet-blue saucer-shaped flowers atop elegant stems.",
            "usages": "Wonderful for weaving through loosely woven herbaceous borders or incorporating into grassy wildflower plantings where it can naturally tumble.",
            "plantingTime": "Plant as young plugs in autumn or spring. Can also be sown under glass in early spring."
        },
        {
            "name": "Purple Loosestrife",
            "scientificName": "Lythrum salicaria",
            "category": "Perennial",
            "height": "1 - 1.5 m",
            "pollinators": [
                "Long-tongued bees",
                "Butterflies"
            ],
            "benefits": "Tall striking magenta spikes. Perfect for wetlands.",
            "plantingTip": "Must have moist or boggy ground. Spreads readily.",
            "colorClass": "bg-wildflower",
            "description": "A striking marginal aquatic perennial forming substantial bushy clumps of willow-like leaves topped by towering, closely packed spires of rich magenta blooms.",
            "usages": "Superb architectural presence for ponds, streamsides, or bog gardens. Combats soil erosion in riparian zones.",
            "plantingTime": "Plant directly into wet mud at the water's edge in spring or autumn."
        },
        {
            "name": "Toadflax",
            "scientificName": "Linaria vulgaris",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": [
                "Bumblebees"
            ],
            "benefits": "Yellow snapdragon-like flowers with orange centres.",
            "plantingTip": "Spreads easily, good for waste ground or stony areas.",
            "colorClass": "bg-wildflower",
            "description": "An upright, branching perennial mimicking miniature yellow and orange snapdragons. It throws vertical spikes carrying these incredibly vibrant, small-scaled blooms densely.",
            "usages": "Highly beneficial for difficult areas facing steep dry conditions, like rough banks, gravel, or railway borders.",
            "plantingTime": "Sow direct thinly in spring once soils warm up fully."
        },
        {
            "name": "Sea Holly",
            "scientificName": "Eryngium maritimum",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": [
                "Many insects"
            ],
            "benefits": "Striking metallic blue thistle-like foliage.",
            "plantingTip": "Requires light, sandy, well-draining soil. Coastal favourite.",
            "colorClass": "bg-wildflower",
            "description": "A striking coastal native that almost resembles a metallic sculpture. It sports stiff, waxy, grey-blue glaucous foliage armed with spines and beautiful blue thistle-like structures.",
            "usages": "Outstanding architectural plant for dry, sunny gravel gardens and arid, sandy coastal borders.",
            "plantingTime": "Plant outside in spring in deep, sandy or very well-drained soil to accommodate its taproot."
        },
        {
            "name": "Wild Marjoram",
            "scientificName": "Origanum vulgare",
            "category": "Wildflower / Herb",
            "height": "20 - 50 cm",
            "pollinators": [
                "Common Blue Butterflies",
                "Gatekeeper Butterflies",
                "Honeybees",
                "Hoverflies"
            ],
            "benefits": "Aromatic pink flower heads. Supports a vast variety of butterflies and provides highly nutritious medicinal oils for visiting insects.",
            "plantingTip": "Thrives in dry, well-draining soils with alkaline pH. Trim back in late autumn after flowering to encourage fresh bushiness.",
            "colorClass": "bg-wildflower",
            "description": "A robust, bushy perennial herb with soft rounded leaves and clustered domed heads of tubular pinkish-purple flowers that act as a veritable feast for summer pollinators.",
            "usages": "Perfect for herb gardens, sunny borders, and gravel courtyards. The leaves can be used dried or fresh to season Mediterranean-style dishes.",
            "plantingTime": "Plant out small plugs in spring or sow seeds in well-draining soil from April to May."
        }
    ],
    "north_scot_part_shade": [
        {
            "name": "Viper's Bugloss",
            "scientificName": "Echium vulgare",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Red Mason Bees",
                "Garden Bumblebees",
                "Painted Lady Butterflies"
            ],
            "benefits": "A magnet for long-tongued insects. Bright blue funnel flower spikes. Uniquely high daily nectar production rate.",
            "plantingTip": "Enjoys dry, sandy, gravelly, or chalky soils. Self-seeding; press seed gently into the surface of the soil during autumn.",
            "colorClass": "bg-wildflower",
            "description": "A spectacular biennial wildflower forming impressive tall spikes laden with vivid blue, funnel-shaped blossoms from June to September. Its bristly, lance-shaped leaves provide a textured backdrop.",
            "usages": "Ideal for unstructured meadow plantings, dry gravel beds, or rocky coastal margins. Often used to create dynamic vertical elements in dry situations.",
            "plantingTime": "Sow seeds directly in late summer or early autumn for germination the following spring."
        },
        {
            "name": "Hawthorn",
            "scientificName": "Crataegus monogyna",
            "category": "Tree/Shrub",
            "height": "Up to 8m",
            "pollinators": [
                "Bees",
                "Moths",
                "Birds"
            ],
            "benefits": "Masses of white May blossom. Deep red autumn berries.",
            "plantingTip": "Excellent hedging plant. Prune in winter.",
            "colorClass": "bg-tree",
            "description": "A robust, thorny native shrub or small tree. Famed for its dense, explosive clusters of heavily scented white blossom in May.",
            "usages": "The supreme backbone of British hedgerows. Makes exceptional windbreaks and boundary hedges while hosting hundreds of insect species.",
            "plantingTime": "Plant bare-root hedging whips between November and early March during the dormant period."
        },
        {
            "name": "Rosebay Willowherb",
            "scientificName": "Chamaenerion angustifolium",
            "category": "Perennial",
            "height": "1 - 1.5 m",
            "pollinators": [
                "Elephant Hawkmoth",
                "Bees"
            ],
            "benefits": "Spikes of magenta flowers. Known as 'fireweed' for rapid colonisation.",
            "plantingTip": "Highly vigorous. Better for wilder areas than small gardens.",
            "colorClass": "bg-wildflower",
            "description": "A towering, robust perennial establishing large colonies rapidly. It carries long, willow-like serrated leaves and huge, dramatic spires composed of glowing pink-magenta flowers.",
            "usages": "A formidable pioneer specifically used for stabilising severely disturbed ground, large open glades, or recovering burned terrain. Very aggressive spreader.",
            "plantingTime": "Sow the fluffy parachute seeds immediately as they ripen in mid-summer on to bare exposed earth."
        },
        {
            "name": "Yarrow",
            "scientificName": "Achillea millefolium",
            "category": "Perennial",
            "height": "30 - 50 cm",
            "pollinators": [
                "Small insects",
                "Hoverflies"
            ],
            "benefits": "Flat-topped white or pink flowerheads.",
            "plantingTip": "Drought resistant, spreads easily.",
            "colorClass": "bg-wildflower",
            "description": "A resilient, spreading perennial bearing feathery, aromatic, highly divided dark green leaves and wide, completely flat-topped clusters of minute white to pale pink flowers.",
            "usages": "A wonderful landing pad for beetles and hoverflies. Drought resistant and excellent for the front of dry, sandy borders.",
            "plantingTime": "Can be sown outdoors almost any time from spring to late summer on a finely raked surface."
        },
        {
            "name": "Toadflax",
            "scientificName": "Linaria vulgaris",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": [
                "Bumblebees"
            ],
            "benefits": "Yellow snapdragon-like flowers with orange centres.",
            "plantingTip": "Spreads easily, good for waste ground or stony areas.",
            "colorClass": "bg-wildflower",
            "description": "An upright, branching perennial mimicking miniature yellow and orange snapdragons. It throws vertical spikes carrying these incredibly vibrant, small-scaled blooms densely.",
            "usages": "Highly beneficial for difficult areas facing steep dry conditions, like rough banks, gravel, or railway borders.",
            "plantingTime": "Sow direct thinly in spring once soils warm up fully."
        },
        {
            "name": "Lady's Bedstraw",
            "scientificName": "Galium verum",
            "category": "Perennial",
            "height": "20 - 60 cm",
            "pollinators": [
                "Moths"
            ],
            "benefits": "Frothy yellow flowers. Smells beautifully of new mown hay.",
            "plantingTip": "Does well in poor, dry soils. Often found near the coast.",
            "colorClass": "bg-wildflower",
            "description": "An scrambling, lax perennial carrying whorls of exceptionally fine needle-like foliage on wiry square stems, frosted heavily with tiny, brilliant yellow frothy blooms smelling of cut hay.",
            "usages": "Wonderful rambling structure amongst taller, stiffer meadow plants preventing grass collapse with its dense weaving.",
            "plantingTime": "Sow directly thinly over prepared ground from autumn right through to the end of spring."
        },
        {
            "name": "Marsh Marigold",
            "scientificName": "Caltha palustris",
            "category": "Perennial",
            "height": "30 - 50 cm",
            "pollinators": [
                "Early hoverflies",
                "Bees"
            ],
            "benefits": "Large waxy golden cup flowers. Brilliant early pollen.",
            "plantingTip": "Plant closely to water edge or in shallow pond margins.",
            "colorClass": "bg-wildflower",
            "description": "A robust perennial forming low, lush mounds of large kidney-shaped glossy leaves, studded with brilliant golden, waxy, buttercup-like early flowers.",
            "usages": "Ideal for the shallow margins of garden wildlife ponds, bog gardens, or damp woodland ditches.",
            "plantingTime": "Plant firmly into wet margins during late spring or divide massive mature clamps just after flowering."
        },
        {
            "name": "Wild Marjoram",
            "scientificName": "Origanum vulgare",
            "category": "Wildflower / Herb",
            "height": "20 - 50 cm",
            "pollinators": [
                "Common Blue Butterflies",
                "Gatekeeper Butterflies",
                "Honeybees",
                "Hoverflies"
            ],
            "benefits": "Aromatic pink flower heads. Supports a vast variety of butterflies and provides highly nutritious medicinal oils for visiting insects.",
            "plantingTip": "Thrives in dry, well-draining soils with alkaline pH. Trim back in late autumn after flowering to encourage fresh bushiness.",
            "colorClass": "bg-wildflower",
            "description": "A robust, bushy perennial herb with soft rounded leaves and clustered domed heads of tubular pinkish-purple flowers that act as a veritable feast for summer pollinators.",
            "usages": "Perfect for herb gardens, sunny borders, and gravel courtyards. The leaves can be used dried or fresh to season Mediterranean-style dishes.",
            "plantingTime": "Plant out small plugs in spring or sow seeds in well-draining soil from April to May."
        },
        {
            "name": "Mallow",
            "scientificName": "Malva sylvestris",
            "category": "Perennial/Biennial",
            "height": "40 - 100 cm",
            "pollinators": [
                "Bees",
                "Butterflies"
            ],
            "benefits": "Stunning purple-veined pink flowers. Long blooming season.",
            "plantingTip": "Extremely tough, grows well natively on coastal paths and waste ground.",
            "colorClass": "bg-wildflower",
            "description": "A bushy, deeply-rooted spreading biennial to short perennial casting large ivy-esque lobed leaves beneath spectacularly showy, saucer-like mauve pink flowers strongly striped with dark purple veins.",
            "usages": "Fills large spaces energetically. Wonderful focal plant for arid gravel gardens, rough neglected banks, or sandy seaside edges.",
            "plantingTime": "Sow directly where it will grow in early spring; they strongly resent transplanting due to their long taproot."
        },
        {
            "name": "Wood Anemone",
            "scientificName": "Anemone nemorosa",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "Hoverflies"
            ],
            "benefits": "White star-like flowers. Indicates ancient woodland.",
            "plantingTip": "Plant slowly spreading rhizomes in autumn in leaf mould.",
            "colorClass": "bg-wildflower",
            "description": "A low, carpeting herbaceous perennial that spreads slowly using rhizomes. It throws up solitary, starry white flowers often delicately flushed with pink on their undersides.",
            "usages": "Perfect for naturalising under deciduous trees and shrubs where it catches early spring light before full canopy cover.",
            "plantingTime": "Best planted as dormant rhizomes in late summer or autumn, burying them gently in rich leaf mould."
        }
    ],
    "north_scot_full_shade": [
        {
            "name": "Red Campion",
            "scientificName": "Silene dioica",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Long-tongued Bumblebees",
                "Hoverflies"
            ],
            "benefits": "Bright pink flowers. Vital spring nectar.",
            "plantingTip": "Adaptable, enjoys somewhat damp, fertile soils.",
            "colorClass": "bg-wildflower",
            "description": "An enduring, loosely branching perennial with slightly hairy, rounded leaves. Generates masses of striking rich pink, deeply notched blooms across the spring and summer.",
            "usages": "Flourishes wonderfully along hedge bottoms, dappled woodland walks, and informal herbaceous situations.",
            "plantingTime": "Sow outdoors in autumn or spring. Self-seeds very reliably in suitable soils."
        },
        {
            "name": "Primrose",
            "scientificName": "Primula vulgaris",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "Brimstone Butterflies",
                "Early Bees"
            ],
            "benefits": "Classic pale yellow spring flowers. Important early nectar source.",
            "plantingTip": "Needs moist, shady spots. Great under deciduous trees.",
            "colorClass": "bg-wildflower",
            "description": "A charming, low-lying perennial that carpets the early spring ground with pale, buttery yellow rosettes with a remarkably subtle, sweet fragrance.",
            "usages": "A staple for early nectar. Excels planted under deciduous trees, in lightly shaded borders, or tucked neatly into shady orchard grasses.",
            "plantingTime": "Buy 'in the green' directly after flowering in spring, or divide mature clumps in early autumn."
        },
        {
            "name": "Bluebell",
            "scientificName": "Hyacinthoides non-scripta",
            "category": "Bulb",
            "height": "20 - 40 cm",
            "pollinators": [
                "Brimstone",
                "Bees"
            ],
            "benefits": "Carpets ancient woodland in deep violet-blue. Scented.",
            "plantingTip": "Must ensure native stock (non-scripta), plant in autumn.",
            "colorClass": "bg-wildflower",
            "description": "A highly celebrated woodland bulb setting forth strap-like leaves and gently drooping, one-sided flower spikes filled with strongly scented, deep violet-blue bells.",
            "usages": "Creates magical woodland carpets under deciduous canopies and mature hedges. Essential to ensure pure native non-scripta forms are used.",
            "plantingTime": "Plant dormant bulbs deeply in the autumn, or lift and divide congested clumps 'in the green' late spring."
        },
        {
            "name": "Foxglove",
            "scientificName": "Digitalis purpurea",
            "category": "Biennial",
            "height": "1 - 2 m",
            "pollinators": [
                "Bumblebees",
                "Moths"
            ],
            "benefits": "Tall spires of purple-pink bells. Excellent for deep-throated bees.",
            "plantingTip": "Poisonous. Thrives in woodland edges and disturbed soils.",
            "colorClass": "bg-wildflower",
            "description": "A classic woodland biennial producing a magnificent, very tall vertical spire of nodding, tubular pink-purple flowers, heavily speckled on their interior lip.",
            "usages": "Brings architectural presence to the back of shaded borders, woodland edges, and dappled clearings. Do not plant near edible crops or ingest.",
            "plantingTime": "Sow seeds directly outdoors in late spring/early summer. Will produce rosettes year one, flowers year two."
        },
        {
            "name": "Snowdrop",
            "scientificName": "Galanthus nivalis",
            "category": "Bulb",
            "height": "10 - 15 cm",
            "pollinators": [
                "Earliest emerging bees"
            ],
            "benefits": "First flowers of the year. Essential lifeline for early wakers.",
            "plantingTip": "Plant 'in the green' just after flowering for best results.",
            "colorClass": "bg-wildflower",
            "description": "The ultimate harbinger of spring. These familiar tiny bulbs hoist perfect, intricate, inverted white drops, subtly marked with green on the inner segments.",
            "usages": "The cornerstone of any woodland garden, drifting under deciduous trees, hedges, and bare winter shrubs.",
            "plantingTime": "Must be planted 'in the green' (immediately after finishing flowering with leaves intact) for the highest success rate."
        },
        {
            "name": "Wild Garlic",
            "scientificName": "Allium ursinum",
            "category": "Bulb",
            "height": "20 - 45 cm",
            "pollinators": [
                "Hoverflies",
                "Bees",
                "Beetles"
            ],
            "benefits": "White starry flowers with strong garlic scent. Edible.",
            "plantingTip": "Spreads vigorously in damp shade woodland conditions.",
            "colorClass": "bg-wildflower",
            "description": "An energetic bulbous perennial. Known for lush, wide green lance-like leaves emitting a potent garlic aroma, topped with spectacular, starry white flower umbels.",
            "usages": "Creates enchanting drifts in damp, shaded woodland margins. A highly renowned forager's favourite for spring pestos.",
            "plantingTime": "Plant bulbs 'in the green' in spring or dry bulbs in late autumn into damp, leafy soil."
        },
        {
            "name": "Bugle",
            "scientificName": "Ajuga reptans",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "White-tailed Bumblebees"
            ],
            "benefits": "Spikes of blue flowers over dark semi-evergreen creeping foliage.",
            "plantingTip": "Excellent groundcover for damp or shaded soils.",
            "colorClass": "bg-wildflower",
            "description": "A mat-forming, creeping perennial throwing up short vertical spikes tightly packed with dark blue, two-lipped flowers above metallic or bronze trailing leaves.",
            "usages": "A hard-working ground cover for challenging damp, shaded spots, acting as a low, weed-suppressing carpet.",
            "plantingTime": "Plant plugs or divisions in spring or early autumn to establish rapid root cover."
        },
        {
            "name": "Lesser Celandine",
            "scientificName": "Ficaria verna",
            "category": "Perennial",
            "height": "5 - 15 cm",
            "pollinators": [
                "Early queen bumblebees"
            ],
            "benefits": "Bright yellow stars in earliest spring.",
            "plantingTip": "Dies back in summer. Beware of spreading in small borders.",
            "colorClass": "bg-wildflower",
            "description": "A ground-hugging perennial bearing very shiny, heart-shaped leaves and highly reflective bright yellow star-flowers that herald the end of winter.",
            "usages": "Useful as rapid early spring ground cover under heavily shaded hedges or deciduous trees.",
            "plantingTime": "Plant the small tuberous roots 'in the green' in late spring or as dormant bulbils in autumn."
        },
        {
            "name": "Wood Anemone",
            "scientificName": "Anemone nemorosa",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "Hoverflies"
            ],
            "benefits": "White star-like flowers. Indicates ancient woodland.",
            "plantingTip": "Plant slowly spreading rhizomes in autumn in leaf mould.",
            "colorClass": "bg-wildflower",
            "description": "A low, carpeting herbaceous perennial that spreads slowly using rhizomes. It throws up solitary, starry white flowers often delicately flushed with pink on their undersides.",
            "usages": "Perfect for naturalising under deciduous trees and shrubs where it catches early spring light before full canopy cover.",
            "plantingTime": "Best planted as dormant rhizomes in late summer or autumn, burying them gently in rich leaf mould."
        },
        {
            "name": "Ivy",
            "scientificName": "Hedera helix",
            "category": "Climber",
            "height": "Up to 20m",
            "pollinators": [
                "Late season bees",
                "Wasps",
                "Hoverflies"
            ],
            "benefits": "Crucial late autumn nectar source. Berries feed birds in late winter.",
            "plantingTip": "Can be invasive if unchecked. Mature climbing forms produce flowers.",
            "colorClass": "bg-shrub",
            "description": "An evergreen, woody climber clinging via aerial roots. Mature forms morph into bushy, non-climbing branches that produce spherical umbels of vital late-season yellowish green flowers.",
            "usages": "Critical late nectar resource for wasps and bees before winter. Provides irreplaceable dense, warm nesting shelter for birds.",
            "plantingTime": "Plant year-round, ideally in autumn or spring, checking vigorously if grown near structural brickwork."
        }
    ],
    "north_scot_dappled": [
        {
            "name": "Viper's Bugloss",
            "scientificName": "Echium vulgare",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Red Mason Bees",
                "Garden Bumblebees",
                "Painted Lady Butterflies"
            ],
            "benefits": "A magnet for long-tongued insects. Bright blue funnel flower spikes. Uniquely high daily nectar production rate.",
            "plantingTip": "Enjoys dry, sandy, gravelly, or chalky soils. Self-seeding; press seed gently into the surface of the soil during autumn.",
            "colorClass": "bg-wildflower",
            "description": "A spectacular biennial wildflower forming impressive tall spikes laden with vivid blue, funnel-shaped blossoms from June to September. Its bristly, lance-shaped leaves provide a textured backdrop.",
            "usages": "Ideal for unstructured meadow plantings, dry gravel beds, or rocky coastal margins. Often used to create dynamic vertical elements in dry situations.",
            "plantingTime": "Sow seeds directly in late summer or early autumn for germination the following spring."
        },
        {
            "name": "Common Knapweed",
            "scientificName": "Centaurea nigra",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": [
                "Butterflies",
                "Finches (seeds)"
            ],
            "benefits": "Thistle-like purple flower heads without the spines.",
            "plantingTip": "Easily grown in any meadow or border setting.",
            "colorClass": "bg-wildflower",
            "description": "A tough, heavily branched meadow perennial featuring deeply lobed basal leaves and hard 'black' scaly buds that burst open into stunning, ragged, neon purple fireworks.",
            "usages": "An absolute powerhouse for pollinator strips. Retains structural silhouettes securely throughout deep winter, feeding finches.",
            "plantingTime": "Sow directly in late summer or autumn. Performs excellently in clay or loam meadows."
        },
        {
            "name": "Toadflax",
            "scientificName": "Linaria vulgaris",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": [
                "Bumblebees"
            ],
            "benefits": "Yellow snapdragon-like flowers with orange centres.",
            "plantingTip": "Spreads easily, good for waste ground or stony areas.",
            "colorClass": "bg-wildflower",
            "description": "An upright, branching perennial mimicking miniature yellow and orange snapdragons. It throws vertical spikes carrying these incredibly vibrant, small-scaled blooms densely.",
            "usages": "Highly beneficial for difficult areas facing steep dry conditions, like rough banks, gravel, or railway borders.",
            "plantingTime": "Sow direct thinly in spring once soils warm up fully."
        },
        {
            "name": "Yarrow",
            "scientificName": "Achillea millefolium",
            "category": "Perennial",
            "height": "30 - 50 cm",
            "pollinators": [
                "Small insects",
                "Hoverflies"
            ],
            "benefits": "Flat-topped white or pink flowerheads.",
            "plantingTip": "Drought resistant, spreads easily.",
            "colorClass": "bg-wildflower",
            "description": "A resilient, spreading perennial bearing feathery, aromatic, highly divided dark green leaves and wide, completely flat-topped clusters of minute white to pale pink flowers.",
            "usages": "A wonderful landing pad for beetles and hoverflies. Drought resistant and excellent for the front of dry, sandy borders.",
            "plantingTime": "Can be sown outdoors almost any time from spring to late summer on a finely raked surface."
        },
        {
            "name": "Devil's-bit Scabious",
            "scientificName": "Succisa pratensis",
            "category": "Perennial",
            "height": "30 - 80 cm",
            "pollinators": [
                "Marsh Fritillary",
                "Bees"
            ],
            "benefits": "Blue-purple spheres. Essential late summer nectar source.",
            "plantingTip": "Prefers damp, acidic soils and marshy areas.",
            "colorClass": "bg-wildflower",
            "description": "A late-flowering perennial bearing quite un-notched, hairy basal leaves and holding deeply violet-blue, perfectly hemispherical pincushion flowerheads on delicate tall branching stems.",
            "usages": "Provides absolutely crucial high-impact nectar just before autumn closes in, particularly in damp conditions or marshy sites.",
            "plantingTime": "Sow fresh un-dried seed in autumn for frost cracking, or divide large clumps post-flowering in late autumn."
        },
        {
            "name": "Water Avens",
            "scientificName": "Geum rivale",
            "category": "Perennial",
            "height": "20 - 45 cm",
            "pollinators": [
                "Bumblebees"
            ],
            "benefits": "Nodding pink/orange bell flowers. Great for damp areas.",
            "plantingTip": "Needs moist or wet soil. Perfect for bog gardens.",
            "colorClass": "bg-wildflower",
            "description": "An elegantly drooping perennial that presents nodding bell-like flowers exhibiting muted, coppery-pink petals emerging from deep reddish-purple sepals.",
            "usages": "Flourishes in damp meadows, stream margins, and bog gardens. Combines beautifully with marsh marigolds and rushes.",
            "plantingTime": "Sow fresh seeds directly in late summer, or divide mature clustered rhizomes in spring."
        },
        {
            "name": "Oxeye Daisy",
            "scientificName": "Leucanthemum vulgare",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": [
                "Hoverflies",
                "Beetles"
            ],
            "benefits": "Classic white daisy with yellow centre. Excellent for beetles.",
            "plantingTip": "Very tough, thrives in open grassland and poor soils.",
            "colorClass": "bg-wildflower",
            "description": "A rugged, classic meadow perennial throwing up a rosette of dark green spoon-shaped foliage and tall sturdy stems holding remarkably large, shining white daisy flowers with bright yellow discs.",
            "usages": "The defining white splash in any summer meadow schema. Readily establishes in poorer soils and provides structural integrity to soft grasses.",
            "plantingTime": "Sow selectively in autumn for best results, or insert plugs during the moist spring period."
        },
        {
            "name": "Blackthorn",
            "scientificName": "Prunus spinosa",
            "category": "Tree/Shrub",
            "height": "Up to 4m",
            "pollinators": [
                "Early Bees",
                "Moths"
            ],
            "benefits": "Clouds of early white blossom. Produces sloes for winter birds.",
            "plantingTip": "Suckers strongly. Forms dense impenetrable thorny thicket.",
            "colorClass": "bg-tree",
            "description": "A densely branching, fiercely thorny shrub that precedes hawthorn by flowering on bare wood with pure white blossoms, later bearing astringent purple sloes.",
            "usages": "Fantastic mixed into hedgerows to create stock-proof, animal-friendly security thickets.",
            "plantingTime": "Plant bare-rooted in deep winter (Nov-Feb). Beware its tendency to sucker vigorously."
        },
        {
            "name": "Marsh Marigold",
            "scientificName": "Caltha palustris",
            "category": "Perennial",
            "height": "30 - 50 cm",
            "pollinators": [
                "Early hoverflies",
                "Bees"
            ],
            "benefits": "Large waxy golden cup flowers. Brilliant early pollen.",
            "plantingTip": "Plant closely to water edge or in shallow pond margins.",
            "colorClass": "bg-wildflower",
            "description": "A robust perennial forming low, lush mounds of large kidney-shaped glossy leaves, studded with brilliant golden, waxy, buttercup-like early flowers.",
            "usages": "Ideal for the shallow margins of garden wildlife ponds, bog gardens, or damp woodland ditches.",
            "plantingTime": "Plant firmly into wet margins during late spring or divide massive mature clamps just after flowering."
        },
        {
            "name": "Hawthorn",
            "scientificName": "Crataegus monogyna",
            "category": "Tree/Shrub",
            "height": "Up to 8m",
            "pollinators": [
                "Bees",
                "Moths",
                "Birds"
            ],
            "benefits": "Masses of white May blossom. Deep red autumn berries.",
            "plantingTip": "Excellent hedging plant. Prune in winter.",
            "colorClass": "bg-tree",
            "description": "A robust, thorny native shrub or small tree. Famed for its dense, explosive clusters of heavily scented white blossom in May.",
            "usages": "The supreme backbone of British hedgerows. Makes exceptional windbreaks and boundary hedges while hosting hundreds of insect species.",
            "plantingTime": "Plant bare-root hedging whips between November and early March during the dormant period."
        }
    ],
    "midlands_wales_full_sun": [
        {
            "name": "Field Forget-me-not",
            "scientificName": "Myosotis arvensis",
            "category": "Wildflower",
            "height": "10 - 40 cm",
            "pollinators": ["Bees", "Hoverflies", "Butterflies"],
            "benefits": "Produces tiny, beautiful sky-blue flowers.",
            "plantingTip": "Easily self-seeds. Can be used in meadows or borders.",
            "colorClass": "bg-wildflower",
            "description": "A delicate, hairy annual or short-lived perennial with tiny, typically azure-blue flowers featuring yellow centres. It forms low, expanding mounds of foliage.",
            "usages": "Ideal for softening edges, underplanting, and creating naturalised drifts.",
            "plantingTime": "Sow seeds in spring or autumn."
        },
        {
            "name": "Corn Marigold",
            "scientificName": "Glebionis segetum",
            "category": "Wildflower",
            "height": "30 - 60 cm",
            "pollinators": ["Bees", "Hoverflies"],
            "benefits": "Vibrant golden-yellow daisy-like flowers that bloom for a long period.",
            "plantingTip": "Needs disturbed soil to germinate. Often sown as part of a cornfield annual mix.",
            "colorClass": "bg-wildflower",
            "description": "A striking native annual sporting brilliant golden-yellow flower heads and distinctive blue-green, slightly fleshy, deeply lobed leaves.",
            "usages": "Excellent for annual meadow mixes and vibrant summer colour.",
            "plantingTime": "Sow directly into bare soil in spring or autumn."
        },
        {
            "name": "Wild Carrot",
            "scientificName": "Daucus carota",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": ["Hoverflies", "Bees", "Beetles"],
            "benefits": "Intricate, flat-topped clusters of tiny white flowers, sometimes with a single red flower in the centre.",
            "plantingTip": "Thrives in well-drained, nutrient-poor soils.",
            "colorClass": "bg-wildflower",
            "description": "An upright biennial bearing feathery foliage and stunning umbels of delicate white flowers. The flower heads curl inward as they go to seed, forming a characteristic 'bird's nest' shape.",
            "usages": "Valuable in wildflower meadows and for attracting predatory insects.",
            "plantingTime": "Sow seeds in late summer or autumn."
        },
        {
            "name": "Red Clover",
            "scientificName": "Trifolium pratense",
            "category": "Wildflower",
            "height": "15 - 40 cm",
            "pollinators": ["Bumblebees", "Butterflies", "Moths"],
            "benefits": "A highly valuable nectar source and excellent nitrogen fixer for the soil.",
            "plantingTip": "Tolerates most soils. Great for meadow lawns.",
            "colorClass": "bg-wildflower",
            "description": "A familiar meadow perennial with distinctive trefoil leaves (often bearing a white crescent marking) and pinkish-red, globe-shaped flower heads.",
            "usages": "Important component of wildlife lawns, meadows, and agricultural leys.",
            "plantingTime": "Sow in spring or autumn."
        },
        {
            "name": "White Campion",
            "scientificName": "Silene latifolia",
            "category": "Wildflower",
            "height": "30 - 100 cm",
            "pollinators": ["Moths"],
            "benefits": "Flowers emit a sweet clove-like scent in the evening to attract night-flying moths.",
            "plantingTip": "Well-drained soil in full sun or part shade.",
            "colorClass": "bg-wildflower",
            "description": "An upright, slightly hairy perennial with opposite leaves and pure white, deeply notched petals on flowers that open fully in the late afternoon.",
            "usages": "Perfect for night gardens and supporting nocturnal pollinator populations.",
            "plantingTime": "Sow seeds in spring or autumn."
        },
        {
            "name": "Betony",
            "scientificName": "Betonica officinalis",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": ["Bees", "Butterflies", "Hoverflies"],
            "benefits": "Striking magenta-purple flower spikes above neat rosettes of scalloped leaves.",
            "plantingTip": "Grows well in heavy clay or moderately fertile soils.",
            "colorClass": "bg-wildflower",
            "description": "A very attractive native perennial of grasslands and open woods, producing dense, short spikes of vivid purplish-red hooded flowers on square stems.",
            "usages": "Ideal for herbaceous borders, meadow planting, and traditional herb gardens.",
            "plantingTime": "Plant out from spring to autumn."
        },
        {
            "name": "Common Mallow",
            "scientificName": "Malva sylvestris",
            "category": "Perennial",
            "height": "60 - 120 cm",
            "pollinators": ["Bees", "Hoverflies"],
            "benefits": "Showy deep pink-purple flowers with dark veins, blooming profusely through summer.",
            "plantingTip": "Very easily grown in most soils. Can self-seed vigorously.",
            "colorClass": "bg-wildflower",
            "description": "A robust, bushy perennial with deeply lobed leaves and highly attractive, large, pink-purple flowers streaked with darker veins.",
            "usages": "Excellent for sunny banks, borders, and cottage garden styles.",
            "plantingTime": "Sow seeds or plant out in spring."
        },
        {
            "name": "Yellow Horned Poppy",
            "scientificName": "Glaucium flavum",
            "category": "Perennial",
            "height": "30 - 90 cm",
            "pollinators": ["Bees", "Hoverflies"],
            "benefits": "Striking silvery-blue foliage and large, bright yellow flowers.",
            "plantingTip": "Needs extremely well-drained, sandy or shingly soil. Found naturally on coasts.",
            "colorClass": "bg-wildflower",
            "description": "A spectacular coastal perennial known for its beautiful glaucous wavy leaves, large brilliant yellow poppy flowers, and extremely long curved seed pods.",
            "usages": "Perfect for gravel gardens, coastal exposures, and dry sandy beds.",
            "plantingTime": "Sow seeds in autumn or spring."
        },
        {
            "name": "Wild Strawberry",
            "scientificName": "Fragaria vesca",
            "category": "Perennial",
            "height": "10 - 30 cm",
            "pollinators": ["Small Bees", "Hoverflies"],
            "benefits": "Provides ground cover and small, intensely sweet, edible fruits.",
            "plantingTip": "Great for dappled woodland shade or edging borders.",
            "colorClass": "bg-wildflower",
            "description": "A creeping perennial that spreads by stolons, featuring small white flowers followed by distinctive, tiny, highly aromatic red strawberries.",
            "usages": "Excellent edible ground cover for woodland gardens or underplanting.",
            "plantingTime": "Plant runners or sow seeds in spring or autumn."
        },
        {
            "name": "Greater Knapweed",
            "scientificName": "Centaurea scabiosa",
            "category": "Perennial",
            "height": "50 - 90 cm",
            "pollinators": ["Butterflies", "Bumblebees", "Finches"],
            "benefits": "Large, showy, thistle-like magenta flower heads without the spines.",
            "plantingTip": "Thrives on chalky or limestone soils in full sun.",
            "colorClass": "bg-wildflower",
            "description": "A robust, deep-rooted perennial with deeply pinnate leaves and large, prominent magenta-purple flower heads surrounded by a dark fringed involucre.",
            "usages": "Fantastic for chalk downland meadows and a magnet for butterflies.",
            "plantingTime": "Plant bare-root or potted specimens in spring or autumn."
        },
        {
            "name": "Guelder Rose",
            "scientificName": "Viburnum opulus",
            "category": "Shrub",
            "height": "2 - 4 m",
            "pollinators": [
                "Hoverflies",
                "Moths",
                "Bees"
            ],
            "benefits": "Spectacular lacecap white flowers in spring, followed by translucent red berries.",
            "plantingTip": "Prefers damp, reasonably fertile soils. Beautiful when mixed into native hedgerows.",
            "colorClass": "bg-tree",
            "description": "A glorious native deciduous shrub that features maple-like lobed leaves. In late spring it produces flat heads of creamy-white flowers, turning to ruby-red berries in autumn.",
            "usages": "Essential for wildlife-friendly hedging or damp woodland edges.",
            "plantingTime": "Plant bare-root between November and March."
        },
        {
            "name": "Meadowsweet",
            "scientificName": "Filipendula ulmaria",
            "category": "Perennial",
            "height": "60 - 120 cm",
            "pollinators": [
                "Bees",
                "Hoverflies"
            ],
            "benefits": "Produces large, fluffy, sweetly scented clouds of cream flowers.",
            "plantingTip": "Requires moist soil; thrives alongside ponds or wet ditches.",
            "colorClass": "bg-wildflower",
            "description": "A tall, majestic damp-meadow perennial with distinctively veined, dark green leaflets and dense, frothy clusters of almond-scented creamy-white flowers.",
            "usages": "Unbeatable for bog gardens and damp meadow plantings.",
            "plantingTime": "Plant out in spring or autumn into reliably moist soil."
        },
        {
            "name": "Common Comfrey",
            "scientificName": "Symphytum officinale",
            "category": "Perennial",
            "height": "80 - 120 cm",
            "pollinators": [
                "Bumblebees",
                "Mason Bees"
            ],
            "benefits": "One of the most powerful nectar producers. Tubular bell flowers recharge nectar rapidly.",
            "plantingTip": "Has a deep taproot. Do not plant where you might want to remove it later.",
            "colorClass": "bg-wildflower",
            "description": "A vigorous, bristly perennial that forms large clumps. Through summer it unfurls characteristic drooping clusters of tubular flowers.",
            "usages": "Incredible for bumblebees. Leaves can be harvested to make exceptionally rich liquid organic fertilizer.",
            "plantingTime": "Sow seeds or plant root cuttings in spring."
        },
        {
            "name": "Yellow Flag Iris",
            "scientificName": "Iris pseudacorus",
            "category": "Perennial",
            "height": "1 - 1.5 m",
            "pollinators": [
                "Hoverflies",
                "Long-tongued Bees"
            ],
            "benefits": "Striking architectural foliage and massive bright yellow summer blooms.",
            "plantingTip": "Can be incredibly vigorous in shallow water. Submerge in aquatic baskets to restrict spread.",
            "colorClass": "bg-wildflower",
            "description": "A bold, robust aquatic and marginal perennial featuring tall, sword-like leaves and vivid yellow flowers.",
            "usages": "Perfect for large wildlife ponds. Provides vital emergence supports for aquatic dragonfly nymphs.",
            "plantingTime": "Plant rhizomes just below the soil surface in spring."
        },
        {
            "name": "Cuckooflower",
            "scientificName": "Cardamine pratensis",
            "category": "Perennial",
            "height": "30 - 50 cm",
            "pollinators": [
                "Orange-tip Butterfly (Host)"
            ],
            "benefits": "The primary larval food plant for the iconic Orange-tip butterfly.",
            "plantingTip": "Prefers consistently damp grass or meadow conditions. Do not mow until mid-summer.",
            "colorClass": "bg-wildflower",
            "description": "Also known as Lady's Smock, this delicate, moisture-loving perennial puts up slender stems holding pale lilac flowers around the time the first cuckoos are heard.",
            "usages": "Crucial for wetland or damp meadow restoration.",
            "plantingTime": "Plant 'in the green' in spring or sow fresh seed in late summer."
        },
        {
            "name": "Herb Robert",
            "scientificName": "Geranium robertianum",
            "category": "Perennial",
            "height": "20 - 40 cm",
            "pollinators": [
                "Small Bees",
                "Hoverflies"
            ],
            "benefits": "Adaptable scrambling foliage that often turns deep crimson. Tiny bright pink flowers.",
            "plantingTip": "Self-seeds prolifically in shady, dry, or awkward spots.",
            "colorClass": "bg-wildflower",
            "description": "A common but valuable native woodland geranium with fern-like leaves on reddish stems. It produces starry vivid pink flowers.",
            "usages": "Excellent for dry shade, underplanting hedges, or filling gaps in stony ground.",
            "plantingTime": "Sow seeds from spring to late summer."
        },
        {
            "name": "Viper's Bugloss",
            "scientificName": "Echium vulgare",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Red Mason Bees",
                "Garden Bumblebees",
                "Painted Lady Butterflies"
            ],
            "benefits": "A magnet for long-tongued insects. Bright blue funnel flower spikes. Uniquely high daily nectar production rate.",
            "plantingTip": "Enjoys dry, sandy, gravelly, or chalky soils. Self-seeding; press seed gently into the surface of the soil during autumn.",
            "colorClass": "bg-wildflower",
            "description": "A spectacular biennial wildflower forming impressive tall spikes laden with vivid blue, funnel-shaped blossoms from June to September. Its bristly, lance-shaped leaves provide a textured backdrop.",
            "usages": "Ideal for unstructured meadow plantings, dry gravel beds, or rocky coastal margins. Often used to create dynamic vertical elements in dry situations.",
            "plantingTime": "Sow seeds directly in late summer or early autumn for germination the following spring."
        },
        {
            "name": "Wild Marjoram",
            "scientificName": "Origanum vulgare",
            "category": "Wildflower / Herb",
            "height": "20 - 50 cm",
            "pollinators": [
                "Common Blue Butterflies",
                "Gatekeeper Butterflies",
                "Honeybees",
                "Hoverflies"
            ],
            "benefits": "Aromatic pink flower heads. Supports a vast variety of butterflies and provides highly nutritious medicinal oils for visiting insects.",
            "plantingTip": "Thrives in dry, well-draining soils with alkaline pH. Trim back in late autumn after flowering to encourage fresh bushiness.",
            "colorClass": "bg-wildflower",
            "description": "A robust, bushy perennial herb with soft rounded leaves and clustered domed heads of tubular pinkish-purple flowers that act as a veritable feast for summer pollinators.",
            "usages": "Perfect for herb gardens, sunny borders, and gravel courtyards. The leaves can be used dried or fresh to season Mediterranean-style dishes.",
            "plantingTime": "Plant out small plugs in spring or sow seeds in well-draining soil from April to May."
        },
        {
            "name": "Wood Anemone",
            "scientificName": "Anemone nemorosa",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "Hoverflies"
            ],
            "benefits": "White star-like flowers. Indicates ancient woodland.",
            "plantingTip": "Plant slowly spreading rhizomes in autumn in leaf mould.",
            "colorClass": "bg-wildflower",
            "description": "A low, carpeting herbaceous perennial that spreads slowly using rhizomes. It throws up solitary, starry white flowers often delicately flushed with pink on their undersides.",
            "usages": "Perfect for naturalising under deciduous trees and shrubs where it catches early spring light before full canopy cover.",
            "plantingTime": "Best planted as dormant rhizomes in late summer or autumn, burying them gently in rich leaf mould."
        },
        {
            "name": "Red Campion",
            "scientificName": "Silene dioica",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Long-tongued Bumblebees",
                "Hoverflies"
            ],
            "benefits": "Bright pink flowers. Vital spring nectar.",
            "plantingTip": "Adaptable, enjoys somewhat damp, fertile soils.",
            "colorClass": "bg-wildflower",
            "description": "An enduring, loosely branching perennial with slightly hairy, rounded leaves. Generates masses of striking rich pink, deeply notched blooms across the spring and summer.",
            "usages": "Flourishes wonderfully along hedge bottoms, dappled woodland walks, and informal herbaceous situations.",
            "plantingTime": "Sow outdoors in autumn or spring. Self-seeds very reliably in suitable soils."
        },
        {
            "name": "Blackthorn",
            "scientificName": "Prunus spinosa",
            "category": "Tree/Shrub",
            "height": "Up to 4m",
            "pollinators": [
                "Early Bees",
                "Moths"
            ],
            "benefits": "Clouds of early white blossom. Produces sloes for winter birds.",
            "plantingTip": "Suckers strongly. Forms dense impenetrable thorny thicket.",
            "colorClass": "bg-tree",
            "description": "A densely branching, fiercely thorny shrub that precedes hawthorn by flowering on bare wood with pure white blossoms, later bearing astringent purple sloes.",
            "usages": "Fantastic mixed into hedgerows to create stock-proof, animal-friendly security thickets.",
            "plantingTime": "Plant bare-rooted in deep winter (Nov-Feb). Beware its tendency to sucker vigorously."
        },
        {
            "name": "Wild Garlic",
            "scientificName": "Allium ursinum",
            "category": "Bulb",
            "height": "20 - 45 cm",
            "pollinators": [
                "Hoverflies",
                "Bees",
                "Beetles"
            ],
            "benefits": "White starry flowers with strong garlic scent. Edible.",
            "plantingTip": "Spreads vigorously in damp shade woodland conditions.",
            "colorClass": "bg-wildflower",
            "description": "An energetic bulbous perennial. Known for lush, wide green lance-like leaves emitting a potent garlic aroma, topped with spectacular, starry white flower umbels.",
            "usages": "Creates enchanting drifts in damp, shaded woodland margins. A highly renowned forager's favourite for spring pestos.",
            "plantingTime": "Plant bulbs 'in the green' in spring or dry bulbs in late autumn into damp, leafy soil."
        },
        {
            "name": "Bluebell",
            "scientificName": "Hyacinthoides non-scripta",
            "category": "Bulb",
            "height": "20 - 40 cm",
            "pollinators": [
                "Brimstone",
                "Bees"
            ],
            "benefits": "Carpets ancient woodland in deep violet-blue. Scented.",
            "plantingTip": "Must ensure native stock (non-scripta), plant in autumn.",
            "colorClass": "bg-wildflower",
            "description": "A highly celebrated woodland bulb setting forth strap-like leaves and gently drooping, one-sided flower spikes filled with strongly scented, deep violet-blue bells.",
            "usages": "Creates magical woodland carpets under deciduous canopies and mature hedges. Essential to ensure pure native non-scripta forms are used.",
            "plantingTime": "Plant dormant bulbs deeply in the autumn, or lift and divide congested clumps 'in the green' late spring."
        },
        {
            "name": "Primrose",
            "scientificName": "Primula vulgaris",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "Brimstone Butterflies",
                "Early Bees"
            ],
            "benefits": "Classic pale yellow spring flowers. Important early nectar source.",
            "plantingTip": "Needs moist, shady spots. Great under deciduous trees.",
            "colorClass": "bg-wildflower",
            "description": "A charming, low-lying perennial that carpets the early spring ground with pale, buttery yellow rosettes with a remarkably subtle, sweet fragrance.",
            "usages": "A staple for early nectar. Excels planted under deciduous trees, in lightly shaded borders, or tucked neatly into shady orchard grasses.",
            "plantingTime": "Buy 'in the green' directly after flowering in spring, or divide mature clumps in early autumn."
        },
        {
            "name": "Gorse",
            "scientificName": "Ulex europaeus",
            "category": "Shrub",
            "height": "1 - 2.5 m",
            "pollinators": [
                "Early Bees"
            ],
            "benefits": "Spiny evergreen. Yellow coconut-scented flowers appearing even in winter.",
            "plantingTip": "Extremely tough, poor soil specialist. Avoid rich garden soil.",
            "colorClass": "bg-shrub",
            "description": "A dense, famously prickly native evergreen shrub forming impenetrable thickets. Yields masses of bright golden pea-flowers boasting a rich coconut aroma in early spring, or almost year-round.",
            "usages": "Exceptional for exposed coastal belts or high moorlands, forming severe, excellent stock-proof boundary windbreaks and cover for small nesting birds.",
            "plantingTime": "Only plant extremely small potted specimens during winter or very early spring, avoiding root disturbance entirely."
        },
        {
            "name": "Kidney Vetch",
            "scientificName": "Anthyllis vulneraria",
            "category": "Wildflower",
            "height": "10 - 30 cm",
            "pollinators": [
                "Small Blue Butterfly (Sole Host)",
                "Bumblebees",
                "Adela Moths"
            ],
            "benefits": "Woolly yellow flower crowns. This is the absolute sole food source for the tiny, endangered Small Blue butterfly caterpillar.",
            "plantingTip": "Requires very sharp drainage and loves chalky, nutrient-poor garden spaces. Perfect for dry gravel beds.",
            "colorClass": "bg-wildflower",
            "description": "A fascinating low-growing native featuring silken, deeply divided leaves and distinctive plump, woolly flower heads that burst into bright yellow coronets.",
            "usages": "Superb for green roofs, alpine planters, rockeries, and sharply-drained chalk banks. An absolute necessity for supporting specific butterfly populations.",
            "plantingTime": "Sow seeds in spring (March-April) or late summer onto scarified, very poor soils."
        }
    ],
    "midlands_wales_part_sun": [
        {
            "name": "Viper's Bugloss",
            "scientificName": "Echium vulgare",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Red Mason Bees",
                "Garden Bumblebees",
                "Painted Lady Butterflies"
            ],
            "benefits": "A magnet for long-tongued insects. Bright blue funnel flower spikes. Uniquely high daily nectar production rate.",
            "plantingTip": "Enjoys dry, sandy, gravelly, or chalky soils. Self-seeding; press seed gently into the surface of the soil during autumn.",
            "colorClass": "bg-wildflower",
            "description": "A spectacular biennial wildflower forming impressive tall spikes laden with vivid blue, funnel-shaped blossoms from June to September. Its bristly, lance-shaped leaves provide a textured backdrop.",
            "usages": "Ideal for unstructured meadow plantings, dry gravel beds, or rocky coastal margins. Often used to create dynamic vertical elements in dry situations.",
            "plantingTime": "Sow seeds directly in late summer or early autumn for germination the following spring."
        },
        {
            "name": "Wild Marjoram",
            "scientificName": "Origanum vulgare",
            "category": "Wildflower / Herb",
            "height": "20 - 50 cm",
            "pollinators": [
                "Common Blue Butterflies",
                "Gatekeeper Butterflies",
                "Honeybees",
                "Hoverflies"
            ],
            "benefits": "Aromatic pink flower heads. Supports a vast variety of butterflies and provides highly nutritious medicinal oils for visiting insects.",
            "plantingTip": "Thrives in dry, well-draining soils with alkaline pH. Trim back in late autumn after flowering to encourage fresh bushiness.",
            "colorClass": "bg-wildflower",
            "description": "A robust, bushy perennial herb with soft rounded leaves and clustered domed heads of tubular pinkish-purple flowers that act as a veritable feast for summer pollinators.",
            "usages": "Perfect for herb gardens, sunny borders, and gravel courtyards. The leaves can be used dried or fresh to season Mediterranean-style dishes.",
            "plantingTime": "Plant out small plugs in spring or sow seeds in well-draining soil from April to May."
        },
        {
            "name": "Wood Anemone",
            "scientificName": "Anemone nemorosa",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "Hoverflies"
            ],
            "benefits": "White star-like flowers. Indicates ancient woodland.",
            "plantingTip": "Plant slowly spreading rhizomes in autumn in leaf mould.",
            "colorClass": "bg-wildflower",
            "description": "A low, carpeting herbaceous perennial that spreads slowly using rhizomes. It throws up solitary, starry white flowers often delicately flushed with pink on their undersides.",
            "usages": "Perfect for naturalising under deciduous trees and shrubs where it catches early spring light before full canopy cover.",
            "plantingTime": "Best planted as dormant rhizomes in late summer or autumn, burying them gently in rich leaf mould."
        },
        {
            "name": "Red Campion",
            "scientificName": "Silene dioica",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Long-tongued Bumblebees",
                "Hoverflies"
            ],
            "benefits": "Bright pink flowers. Vital spring nectar.",
            "plantingTip": "Adaptable, enjoys somewhat damp, fertile soils.",
            "colorClass": "bg-wildflower",
            "description": "An enduring, loosely branching perennial with slightly hairy, rounded leaves. Generates masses of striking rich pink, deeply notched blooms across the spring and summer.",
            "usages": "Flourishes wonderfully along hedge bottoms, dappled woodland walks, and informal herbaceous situations.",
            "plantingTime": "Sow outdoors in autumn or spring. Self-seeds very reliably in suitable soils."
        },
        {
            "name": "Blackthorn",
            "scientificName": "Prunus spinosa",
            "category": "Tree/Shrub",
            "height": "Up to 4m",
            "pollinators": [
                "Early Bees",
                "Moths"
            ],
            "benefits": "Clouds of early white blossom. Produces sloes for winter birds.",
            "plantingTip": "Suckers strongly. Forms dense impenetrable thorny thicket.",
            "colorClass": "bg-tree",
            "description": "A densely branching, fiercely thorny shrub that precedes hawthorn by flowering on bare wood with pure white blossoms, later bearing astringent purple sloes.",
            "usages": "Fantastic mixed into hedgerows to create stock-proof, animal-friendly security thickets.",
            "plantingTime": "Plant bare-rooted in deep winter (Nov-Feb). Beware its tendency to sucker vigorously."
        },
        {
            "name": "Wild Garlic",
            "scientificName": "Allium ursinum",
            "category": "Bulb",
            "height": "20 - 45 cm",
            "pollinators": [
                "Hoverflies",
                "Bees",
                "Beetles"
            ],
            "benefits": "White starry flowers with strong garlic scent. Edible.",
            "plantingTip": "Spreads vigorously in damp shade woodland conditions.",
            "colorClass": "bg-wildflower",
            "description": "An energetic bulbous perennial. Known for lush, wide green lance-like leaves emitting a potent garlic aroma, topped with spectacular, starry white flower umbels.",
            "usages": "Creates enchanting drifts in damp, shaded woodland margins. A highly renowned forager's favourite for spring pestos.",
            "plantingTime": "Plant bulbs 'in the green' in spring or dry bulbs in late autumn into damp, leafy soil."
        },
        {
            "name": "Bluebell",
            "scientificName": "Hyacinthoides non-scripta",
            "category": "Bulb",
            "height": "20 - 40 cm",
            "pollinators": [
                "Brimstone",
                "Bees"
            ],
            "benefits": "Carpets ancient woodland in deep violet-blue. Scented.",
            "plantingTip": "Must ensure native stock (non-scripta), plant in autumn.",
            "colorClass": "bg-wildflower",
            "description": "A highly celebrated woodland bulb setting forth strap-like leaves and gently drooping, one-sided flower spikes filled with strongly scented, deep violet-blue bells.",
            "usages": "Creates magical woodland carpets under deciduous canopies and mature hedges. Essential to ensure pure native non-scripta forms are used.",
            "plantingTime": "Plant dormant bulbs deeply in the autumn, or lift and divide congested clumps 'in the green' late spring."
        },
        {
            "name": "Primrose",
            "scientificName": "Primula vulgaris",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "Brimstone Butterflies",
                "Early Bees"
            ],
            "benefits": "Classic pale yellow spring flowers. Important early nectar source.",
            "plantingTip": "Needs moist, shady spots. Great under deciduous trees.",
            "colorClass": "bg-wildflower",
            "description": "A charming, low-lying perennial that carpets the early spring ground with pale, buttery yellow rosettes with a remarkably subtle, sweet fragrance.",
            "usages": "A staple for early nectar. Excels planted under deciduous trees, in lightly shaded borders, or tucked neatly into shady orchard grasses.",
            "plantingTime": "Buy 'in the green' directly after flowering in spring, or divide mature clumps in early autumn."
        },
        {
            "name": "Gorse",
            "scientificName": "Ulex europaeus",
            "category": "Shrub",
            "height": "1 - 2.5 m",
            "pollinators": [
                "Early Bees"
            ],
            "benefits": "Spiny evergreen. Yellow coconut-scented flowers appearing even in winter.",
            "plantingTip": "Extremely tough, poor soil specialist. Avoid rich garden soil.",
            "colorClass": "bg-shrub",
            "description": "A dense, famously prickly native evergreen shrub forming impenetrable thickets. Yields masses of bright golden pea-flowers boasting a rich coconut aroma in early spring, or almost year-round.",
            "usages": "Exceptional for exposed coastal belts or high moorlands, forming severe, excellent stock-proof boundary windbreaks and cover for small nesting birds.",
            "plantingTime": "Only plant extremely small potted specimens during winter or very early spring, avoiding root disturbance entirely."
        },
        {
            "name": "Kidney Vetch",
            "scientificName": "Anthyllis vulneraria",
            "category": "Wildflower",
            "height": "10 - 30 cm",
            "pollinators": [
                "Small Blue Butterfly (Sole Host)",
                "Bumblebees",
                "Adela Moths"
            ],
            "benefits": "Woolly yellow flower crowns. This is the absolute sole food source for the tiny, endangered Small Blue butterfly caterpillar.",
            "plantingTip": "Requires very sharp drainage and loves chalky, nutrient-poor garden spaces. Perfect for dry gravel beds.",
            "colorClass": "bg-wildflower",
            "description": "A fascinating low-growing native featuring silken, deeply divided leaves and distinctive plump, woolly flower heads that burst into bright yellow coronets.",
            "usages": "Superb for green roofs, alpine planters, rockeries, and sharply-drained chalk banks. An absolute necessity for supporting specific butterfly populations.",
            "plantingTime": "Sow seeds in spring (March-April) or late summer onto scarified, very poor soils."
        }
    ],
    "midlands_wales_part_shade": [
        {
            "name": "Viper's Bugloss",
            "scientificName": "Echium vulgare",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Red Mason Bees",
                "Garden Bumblebees",
                "Painted Lady Butterflies"
            ],
            "benefits": "A magnet for long-tongued insects. Bright blue funnel flower spikes. Uniquely high daily nectar production rate.",
            "plantingTip": "Enjoys dry, sandy, gravelly, or chalky soils. Self-seeding; press seed gently into the surface of the soil during autumn.",
            "colorClass": "bg-wildflower",
            "description": "A spectacular biennial wildflower forming impressive tall spikes laden with vivid blue, funnel-shaped blossoms from June to September. Its bristly, lance-shaped leaves provide a textured backdrop.",
            "usages": "Ideal for unstructured meadow plantings, dry gravel beds, or rocky coastal margins. Often used to create dynamic vertical elements in dry situations.",
            "plantingTime": "Sow seeds directly in late summer or early autumn for germination the following spring."
        },
        {
            "name": "Chicory",
            "scientificName": "Cichorium intybus",
            "category": "Perennial",
            "height": "1 - 1.5m",
            "pollinators": [
                "Bees",
                "Hoverflies"
            ],
            "benefits": "Stunning pure sky-blue daisy-like blooms.",
            "plantingTip": "Deep taproot prefers chalk and limestone margins.",
            "colorClass": "bg-wildflower",
            "description": "A stiff, erect, remarkably tall perennial. It bears rigid branching stems and striking, clear sky-blue daisy flowers that open in the morning and close by mid-afternoon.",
            "usages": "A beautiful structural plant for the rear of sunny, well-draining borders or wildflower meadows. Deep taproots tolerate severe drought.",
            "plantingTime": "Sow seeds in spring directly where they are to flower, as it heavily resents transplantation."
        },
        {
            "name": "Marsh Marigold",
            "scientificName": "Caltha palustris",
            "category": "Perennial",
            "height": "30 - 50 cm",
            "pollinators": [
                "Early hoverflies",
                "Bees"
            ],
            "benefits": "Large waxy golden cup flowers. Brilliant early pollen.",
            "plantingTip": "Plant closely to water edge or in shallow pond margins.",
            "colorClass": "bg-wildflower",
            "description": "A robust perennial forming low, lush mounds of large kidney-shaped glossy leaves, studded with brilliant golden, waxy, buttercup-like early flowers.",
            "usages": "Ideal for the shallow margins of garden wildlife ponds, bog gardens, or damp woodland ditches.",
            "plantingTime": "Plant firmly into wet margins during late spring or divide massive mature clamps just after flowering."
        },
        {
            "name": "Dog Rose",
            "scientificName": "Rosa canina",
            "category": "Shrub",
            "height": "Up to 3m",
            "pollinators": [
                "Bees",
                "Birds (hips)"
            ],
            "benefits": "Large pale pink/white flowers followed by red hips.",
            "plantingTip": "Thorny scrambling shrub. Best for larger hedgerows.",
            "colorClass": "bg-shrub",
            "description": "A vigorous, scrambling deciduous shrub bearing thorny stems and scattered with wonderfully delicate, large single pink or white rose blooms, transforming into bright red hips.",
            "usages": "Essential for mixed native hedgerows. Provides nesting thickets for small birds and food sources extending late into winter.",
            "plantingTime": "Plant bare-root whips between November and March while fully dormant."
        },
        {
            "name": "Birds-foot Trefoil",
            "scientificName": "Lotus corniculatus",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "Common Blue Butterfly",
                "Bees"
            ],
            "benefits": "Yellow and orange pea-like flowers. Great ground cover.",
            "plantingTip": "Drought tolerant. Perfect for sunny banks and rockeries.",
            "colorClass": "bg-wildflower",
            "description": "A trailing, spreading perennial bearing small trefoil leaves and incredibly vibrant, small clusters of rich golden yellow and burnt orange pea-like flowers.",
            "usages": "Pioneer species for brownfield or urban rewilding. Brilliant for sunny rock gardens or trailing over hot edges.",
            "plantingTime": "Sow seeds directly onto well-drained impoverished soils in spring or late summer."
        },
        {
            "name": "Rowan",
            "scientificName": "Sorbus aucuparia",
            "category": "Tree",
            "height": "Up to 15m",
            "pollinators": [
                "Bees",
                "Birds"
            ],
            "benefits": "White flowers then abundant bright red autumn berries.",
            "plantingTip": "Very hardy. Thrives even in upland, cold lochsides.",
            "colorClass": "bg-tree",
            "description": "An elegant, small-to-medium graceful deciduous tree bearing serrated, pinnate leaves, flat clusters of creamy white spring flowers, and spectacular hanging bunches of bright red berries.",
            "usages": "An excellent ornamental tree for smaller gardens, high altitude exposures, and streets, feeding thrushes and waxwings.",
            "plantingTime": "Plant as bare-root stock or potted trees during the winter months."
        },
        {
            "name": "Bugle",
            "scientificName": "Ajuga reptans",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "White-tailed Bumblebees"
            ],
            "benefits": "Spikes of blue flowers over dark semi-evergreen creeping foliage.",
            "plantingTip": "Excellent groundcover for damp or shaded soils.",
            "colorClass": "bg-wildflower",
            "description": "A mat-forming, creeping perennial throwing up short vertical spikes tightly packed with dark blue, two-lipped flowers above metallic or bronze trailing leaves.",
            "usages": "A hard-working ground cover for challenging damp, shaded spots, acting as a low, weed-suppressing carpet.",
            "plantingTime": "Plant plugs or divisions in spring or early autumn to establish rapid root cover."
        },
        {
            "name": "Common Sorrel",
            "scientificName": "Rumex acetosa",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": [
                "Small Copper Butterfly (Host)"
            ],
            "benefits": "Reddish flower spikes. Leaves are food for caterpillars.",
            "plantingTip": "Very easy to grow in meadow situations.",
            "colorClass": "bg-wildflower",
            "description": "A hardy, deep meadow perennial bearing arrow-shaped fleshy leaves extending into slender spikes of delicate, rusty-red flowering panicles reaching above the grass canopy.",
            "usages": "Edible, sharp-tasting foliage. In the wild garden setting, it specifically feeds specific metallic copper butterflies.",
            "plantingTime": "Sow freely into meadows, borders, or kitchen garden plots from early spring to late summer."
        },
        {
            "name": "Cornflower",
            "scientificName": "Centaurea cyanus",
            "category": "Annual",
            "height": "30 - 80 cm",
            "pollinators": [
                "Bees",
                "Butterflies"
            ],
            "benefits": "Vivid blue flowers. Superb for summer meadows.",
            "plantingTip": "Sow in autumn or spring for quick colour.",
            "colorClass": "bg-wildflower",
            "description": "A slender, fast-growing hardy annual boasting vivid, incredibly pure azure-blue ruffled flower heads set atop fine, cottony, heavily branched stems.",
            "usages": "An iconic cornfield weed, excellent for gap-filling in new garden beds and absolutely stellar for cutting gardens.",
            "plantingTime": "Sow directly outside in either late summer (for larger, earlier plants next year) or early spring."
        },
        {
            "name": "Ragged Robin",
            "scientificName": "Lychnis flos-cuculi",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": [
                "Butterflies",
                "Bees"
            ],
            "benefits": "Deeply divided pink petals. Provides long flowering season.",
            "plantingTip": "Needs moist soil, excellent for bog gardens or damp meadows.",
            "colorClass": "bg-wildflower",
            "description": "A slender, graceful perennial sporting reddish stems and unique intense pink flowers characterised by petals that are so deeply divided they appear tattered or ragged.",
            "usages": "Superb for damp wildflower meadows alongside native grasses, edges of ponds, and soggy bog garden plots.",
            "plantingTime": "Plant in early spring directly into permanently moist ground, or sow fresh seed in late summer."
        }
    ],
    "midlands_wales_full_shade": [
        {
            "name": "Red Campion",
            "scientificName": "Silene dioica",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Long-tongued Bumblebees",
                "Hoverflies"
            ],
            "benefits": "Bright pink flowers. Vital spring nectar.",
            "plantingTip": "Adaptable, enjoys somewhat damp, fertile soils.",
            "colorClass": "bg-wildflower",
            "description": "An enduring, loosely branching perennial with slightly hairy, rounded leaves. Generates masses of striking rich pink, deeply notched blooms across the spring and summer.",
            "usages": "Flourishes wonderfully along hedge bottoms, dappled woodland walks, and informal herbaceous situations.",
            "plantingTime": "Sow outdoors in autumn or spring. Self-seeds very reliably in suitable soils."
        },
        {
            "name": "Primrose",
            "scientificName": "Primula vulgaris",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "Brimstone Butterflies",
                "Early Bees"
            ],
            "benefits": "Classic pale yellow spring flowers. Important early nectar source.",
            "plantingTip": "Needs moist, shady spots. Great under deciduous trees.",
            "colorClass": "bg-wildflower",
            "description": "A charming, low-lying perennial that carpets the early spring ground with pale, buttery yellow rosettes with a remarkably subtle, sweet fragrance.",
            "usages": "A staple for early nectar. Excels planted under deciduous trees, in lightly shaded borders, or tucked neatly into shady orchard grasses.",
            "plantingTime": "Buy 'in the green' directly after flowering in spring, or divide mature clumps in early autumn."
        },
        {
            "name": "Bluebell",
            "scientificName": "Hyacinthoides non-scripta",
            "category": "Bulb",
            "height": "20 - 40 cm",
            "pollinators": [
                "Brimstone",
                "Bees"
            ],
            "benefits": "Carpets ancient woodland in deep violet-blue. Scented.",
            "plantingTip": "Must ensure native stock (non-scripta), plant in autumn.",
            "colorClass": "bg-wildflower",
            "description": "A highly celebrated woodland bulb setting forth strap-like leaves and gently drooping, one-sided flower spikes filled with strongly scented, deep violet-blue bells.",
            "usages": "Creates magical woodland carpets under deciduous canopies and mature hedges. Essential to ensure pure native non-scripta forms are used.",
            "plantingTime": "Plant dormant bulbs deeply in the autumn, or lift and divide congested clumps 'in the green' late spring."
        },
        {
            "name": "Foxglove",
            "scientificName": "Digitalis purpurea",
            "category": "Biennial",
            "height": "1 - 2 m",
            "pollinators": [
                "Bumblebees",
                "Moths"
            ],
            "benefits": "Tall spires of purple-pink bells. Excellent for deep-throated bees.",
            "plantingTip": "Poisonous. Thrives in woodland edges and disturbed soils.",
            "colorClass": "bg-wildflower",
            "description": "A classic woodland biennial producing a magnificent, very tall vertical spire of nodding, tubular pink-purple flowers, heavily speckled on their interior lip.",
            "usages": "Brings architectural presence to the back of shaded borders, woodland edges, and dappled clearings. Do not plant near edible crops or ingest.",
            "plantingTime": "Sow seeds directly outdoors in late spring/early summer. Will produce rosettes year one, flowers year two."
        },
        {
            "name": "Snowdrop",
            "scientificName": "Galanthus nivalis",
            "category": "Bulb",
            "height": "10 - 15 cm",
            "pollinators": [
                "Earliest emerging bees"
            ],
            "benefits": "First flowers of the year. Essential lifeline for early wakers.",
            "plantingTip": "Plant 'in the green' just after flowering for best results.",
            "colorClass": "bg-wildflower",
            "description": "The ultimate harbinger of spring. These familiar tiny bulbs hoist perfect, intricate, inverted white drops, subtly marked with green on the inner segments.",
            "usages": "The cornerstone of any woodland garden, drifting under deciduous trees, hedges, and bare winter shrubs.",
            "plantingTime": "Must be planted 'in the green' (immediately after finishing flowering with leaves intact) for the highest success rate."
        },
        {
            "name": "Wild Garlic",
            "scientificName": "Allium ursinum",
            "category": "Bulb",
            "height": "20 - 45 cm",
            "pollinators": [
                "Hoverflies",
                "Bees",
                "Beetles"
            ],
            "benefits": "White starry flowers with strong garlic scent. Edible.",
            "plantingTip": "Spreads vigorously in damp shade woodland conditions.",
            "colorClass": "bg-wildflower",
            "description": "An energetic bulbous perennial. Known for lush, wide green lance-like leaves emitting a potent garlic aroma, topped with spectacular, starry white flower umbels.",
            "usages": "Creates enchanting drifts in damp, shaded woodland margins. A highly renowned forager's favourite for spring pestos.",
            "plantingTime": "Plant bulbs 'in the green' in spring or dry bulbs in late autumn into damp, leafy soil."
        },
        {
            "name": "Bugle",
            "scientificName": "Ajuga reptans",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "White-tailed Bumblebees"
            ],
            "benefits": "Spikes of blue flowers over dark semi-evergreen creeping foliage.",
            "plantingTip": "Excellent groundcover for damp or shaded soils.",
            "colorClass": "bg-wildflower",
            "description": "A mat-forming, creeping perennial throwing up short vertical spikes tightly packed with dark blue, two-lipped flowers above metallic or bronze trailing leaves.",
            "usages": "A hard-working ground cover for challenging damp, shaded spots, acting as a low, weed-suppressing carpet.",
            "plantingTime": "Plant plugs or divisions in spring or early autumn to establish rapid root cover."
        },
        {
            "name": "Lesser Celandine",
            "scientificName": "Ficaria verna",
            "category": "Perennial",
            "height": "5 - 15 cm",
            "pollinators": [
                "Early queen bumblebees"
            ],
            "benefits": "Bright yellow stars in earliest spring.",
            "plantingTip": "Dies back in summer. Beware of spreading in small borders.",
            "colorClass": "bg-wildflower",
            "description": "A ground-hugging perennial bearing very shiny, heart-shaped leaves and highly reflective bright yellow star-flowers that herald the end of winter.",
            "usages": "Useful as rapid early spring ground cover under heavily shaded hedges or deciduous trees.",
            "plantingTime": "Plant the small tuberous roots 'in the green' in late spring or as dormant bulbils in autumn."
        },
        {
            "name": "Wood Anemone",
            "scientificName": "Anemone nemorosa",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "Hoverflies"
            ],
            "benefits": "White star-like flowers. Indicates ancient woodland.",
            "plantingTip": "Plant slowly spreading rhizomes in autumn in leaf mould.",
            "colorClass": "bg-wildflower",
            "description": "A low, carpeting herbaceous perennial that spreads slowly using rhizomes. It throws up solitary, starry white flowers often delicately flushed with pink on their undersides.",
            "usages": "Perfect for naturalising under deciduous trees and shrubs where it catches early spring light before full canopy cover.",
            "plantingTime": "Best planted as dormant rhizomes in late summer or autumn, burying them gently in rich leaf mould."
        },
        {
            "name": "Ivy",
            "scientificName": "Hedera helix",
            "category": "Climber",
            "height": "Up to 20m",
            "pollinators": [
                "Late season bees",
                "Wasps",
                "Hoverflies"
            ],
            "benefits": "Crucial late autumn nectar source. Berries feed birds in late winter.",
            "plantingTip": "Can be invasive if unchecked. Mature climbing forms produce flowers.",
            "colorClass": "bg-shrub",
            "description": "An evergreen, woody climber clinging via aerial roots. Mature forms morph into bushy, non-climbing branches that produce spherical umbels of vital late-season yellowish green flowers.",
            "usages": "Critical late nectar resource for wasps and bees before winter. Provides irreplaceable dense, warm nesting shelter for birds.",
            "plantingTime": "Plant year-round, ideally in autumn or spring, checking vigorously if grown near structural brickwork."
        }
    ],
    "midlands_wales_dappled": [
        {
            "name": "Viper's Bugloss",
            "scientificName": "Echium vulgare",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Red Mason Bees",
                "Garden Bumblebees",
                "Painted Lady Butterflies"
            ],
            "benefits": "A magnet for long-tongued insects. Bright blue funnel flower spikes. Uniquely high daily nectar production rate.",
            "plantingTip": "Enjoys dry, sandy, gravelly, or chalky soils. Self-seeding; press seed gently into the surface of the soil during autumn.",
            "colorClass": "bg-wildflower",
            "description": "A spectacular biennial wildflower forming impressive tall spikes laden with vivid blue, funnel-shaped blossoms from June to September. Its bristly, lance-shaped leaves provide a textured backdrop.",
            "usages": "Ideal for unstructured meadow plantings, dry gravel beds, or rocky coastal margins. Often used to create dynamic vertical elements in dry situations.",
            "plantingTime": "Sow seeds directly in late summer or early autumn for germination the following spring."
        },
        {
            "name": "Purple Loosestrife",
            "scientificName": "Lythrum salicaria",
            "category": "Perennial",
            "height": "1 - 1.5 m",
            "pollinators": [
                "Long-tongued bees",
                "Butterflies"
            ],
            "benefits": "Tall striking magenta spikes. Perfect for wetlands.",
            "plantingTip": "Must have moist or boggy ground. Spreads readily.",
            "colorClass": "bg-wildflower",
            "description": "A striking marginal aquatic perennial forming substantial bushy clumps of willow-like leaves topped by towering, closely packed spires of rich magenta blooms.",
            "usages": "Superb architectural presence for ponds, streamsides, or bog gardens. Combats soil erosion in riparian zones.",
            "plantingTime": "Plant directly into wet mud at the water's edge in spring or autumn."
        },
        {
            "name": "Oxeye Daisy",
            "scientificName": "Leucanthemum vulgare",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": [
                "Hoverflies",
                "Beetles"
            ],
            "benefits": "Classic white daisy with yellow centre. Excellent for beetles.",
            "plantingTip": "Very tough, thrives in open grassland and poor soils.",
            "colorClass": "bg-wildflower",
            "description": "A rugged, classic meadow perennial throwing up a rosette of dark green spoon-shaped foliage and tall sturdy stems holding remarkably large, shining white daisy flowers with bright yellow discs.",
            "usages": "The defining white splash in any summer meadow schema. Readily establishes in poorer soils and provides structural integrity to soft grasses.",
            "plantingTime": "Sow selectively in autumn for best results, or insert plugs during the moist spring period."
        },
        {
            "name": "Dog Rose",
            "scientificName": "Rosa canina",
            "category": "Shrub",
            "height": "Up to 3m",
            "pollinators": [
                "Bees",
                "Birds (hips)"
            ],
            "benefits": "Large pale pink/white flowers followed by red hips.",
            "plantingTip": "Thorny scrambling shrub. Best for larger hedgerows.",
            "colorClass": "bg-shrub",
            "description": "A vigorous, scrambling deciduous shrub bearing thorny stems and scattered with wonderfully delicate, large single pink or white rose blooms, transforming into bright red hips.",
            "usages": "Essential for mixed native hedgerows. Provides nesting thickets for small birds and food sources extending late into winter.",
            "plantingTime": "Plant bare-root whips between November and March while fully dormant."
        },
        {
            "name": "Water Avens",
            "scientificName": "Geum rivale",
            "category": "Perennial",
            "height": "20 - 45 cm",
            "pollinators": [
                "Bumblebees"
            ],
            "benefits": "Nodding pink/orange bell flowers. Great for damp areas.",
            "plantingTip": "Needs moist or wet soil. Perfect for bog gardens.",
            "colorClass": "bg-wildflower",
            "description": "An elegantly drooping perennial that presents nodding bell-like flowers exhibiting muted, coppery-pink petals emerging from deep reddish-purple sepals.",
            "usages": "Flourishes in damp meadows, stream margins, and bog gardens. Combines beautifully with marsh marigolds and rushes.",
            "plantingTime": "Sow fresh seeds directly in late summer, or divide mature clustered rhizomes in spring."
        },
        {
            "name": "Lesser Celandine",
            "scientificName": "Ficaria verna",
            "category": "Perennial",
            "height": "5 - 15 cm",
            "pollinators": [
                "Early queen bumblebees"
            ],
            "benefits": "Bright yellow stars in earliest spring.",
            "plantingTip": "Dies back in summer. Beware of spreading in small borders.",
            "colorClass": "bg-wildflower",
            "description": "A ground-hugging perennial bearing very shiny, heart-shaped leaves and highly reflective bright yellow star-flowers that herald the end of winter.",
            "usages": "Useful as rapid early spring ground cover under heavily shaded hedges or deciduous trees.",
            "plantingTime": "Plant the small tuberous roots 'in the green' in late spring or as dormant bulbils in autumn."
        },
        {
            "name": "Field Scabious",
            "scientificName": "Knautia arvensis",
            "category": "Perennial",
            "height": "60 - 100 cm",
            "pollinators": [
                "Butterflies",
                "Bees"
            ],
            "benefits": "Pincushion-like lilac flowers.",
            "plantingTip": "Thrives in dry, chalky or sandy soils.",
            "colorClass": "bg-wildflower",
            "description": "A robust, tall, rough-stemmed perennial carrying numerous delicate, flat, pincushion-like lilac-blue flower heads over a long, generous late summer season.",
            "usages": "Very open and airy, making it superb for drifting through tall meadow grasses and loose herbaceous borders.",
            "plantingTime": "Sow seeds in spring or early autumn, or split mature fleshy roots during late winter."
        },
        {
            "name": "Hemp Agrimony",
            "scientificName": "Eupatorium cannabinum",
            "category": "Perennial",
            "height": "1 - 1.5 m",
            "pollinators": [
                "Butterflies",
                "Hoverflies"
            ],
            "benefits": "Frothy pink flower heads. Absolutely loved by autumn butterflies.",
            "plantingTip": "Prefers damp soils. Excellent near ponds or damp ditches.",
            "colorClass": "bg-wildflower",
            "description": "A substantial, robust marginal perennial reaching stately heights, topped with large, frothy clusters of soft pink or pale purplish flowers in late summer.",
            "usages": "Unbeatable for damp, boggy conditions or the margins of large ponds. A vital late-season nectar station for migratory butterflies.",
            "plantingTime": "Plant divisions or young plants during autumn or spring into moisture-retentive soils."
        },
        {
            "name": "Wild Marjoram",
            "scientificName": "Origanum vulgare",
            "category": "Wildflower / Herb",
            "height": "20 - 50 cm",
            "pollinators": [
                "Common Blue Butterflies",
                "Gatekeeper Butterflies",
                "Honeybees",
                "Hoverflies"
            ],
            "benefits": "Aromatic pink flower heads. Supports a vast variety of butterflies and provides highly nutritious medicinal oils for visiting insects.",
            "plantingTip": "Thrives in dry, well-draining soils with alkaline pH. Trim back in late autumn after flowering to encourage fresh bushiness.",
            "colorClass": "bg-wildflower",
            "description": "A robust, bushy perennial herb with soft rounded leaves and clustered domed heads of tubular pinkish-purple flowers that act as a veritable feast for summer pollinators.",
            "usages": "Perfect for herb gardens, sunny borders, and gravel courtyards. The leaves can be used dried or fresh to season Mediterranean-style dishes.",
            "plantingTime": "Plant out small plugs in spring or sow seeds in well-draining soil from April to May."
        },
        {
            "name": "Foxglove",
            "scientificName": "Digitalis purpurea",
            "category": "Biennial",
            "height": "1 - 2 m",
            "pollinators": [
                "Bumblebees",
                "Moths"
            ],
            "benefits": "Tall spires of purple-pink bells. Excellent for deep-throated bees.",
            "plantingTip": "Poisonous. Thrives in woodland edges and disturbed soils.",
            "colorClass": "bg-wildflower",
            "description": "A classic woodland biennial producing a magnificent, very tall vertical spire of nodding, tubular pink-purple flowers, heavily speckled on their interior lip.",
            "usages": "Brings architectural presence to the back of shaded borders, woodland edges, and dappled clearings. Do not plant near edible crops or ingest.",
            "plantingTime": "Sow seeds directly outdoors in late spring/early summer. Will produce rosettes year one, flowers year two."
        }
    ],
    "coastal_full_sun": [
        {
            "name": "Field Forget-me-not",
            "scientificName": "Myosotis arvensis",
            "category": "Wildflower",
            "height": "10 - 40 cm",
            "pollinators": ["Bees", "Hoverflies", "Butterflies"],
            "benefits": "Produces tiny, beautiful sky-blue flowers.",
            "plantingTip": "Easily self-seeds. Can be used in meadows or borders.",
            "colorClass": "bg-wildflower",
            "description": "A delicate, hairy annual or short-lived perennial with tiny, typically azure-blue flowers featuring yellow centres. It forms low, expanding mounds of foliage.",
            "usages": "Ideal for softening edges, underplanting, and creating naturalised drifts.",
            "plantingTime": "Sow seeds in spring or autumn."
        },
        {
            "name": "Corn Marigold",
            "scientificName": "Glebionis segetum",
            "category": "Wildflower",
            "height": "30 - 60 cm",
            "pollinators": ["Bees", "Hoverflies"],
            "benefits": "Vibrant golden-yellow daisy-like flowers that bloom for a long period.",
            "plantingTip": "Needs disturbed soil to germinate. Often sown as part of a cornfield annual mix.",
            "colorClass": "bg-wildflower",
            "description": "A striking native annual sporting brilliant golden-yellow flower heads and distinctive blue-green, slightly fleshy, deeply lobed leaves.",
            "usages": "Excellent for annual meadow mixes and vibrant summer colour.",
            "plantingTime": "Sow directly into bare soil in spring or autumn."
        },
        {
            "name": "Wild Carrot",
            "scientificName": "Daucus carota",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": ["Hoverflies", "Bees", "Beetles"],
            "benefits": "Intricate, flat-topped clusters of tiny white flowers, sometimes with a single red flower in the centre.",
            "plantingTip": "Thrives in well-drained, nutrient-poor soils.",
            "colorClass": "bg-wildflower",
            "description": "An upright biennial bearing feathery foliage and stunning umbels of delicate white flowers. The flower heads curl inward as they go to seed, forming a characteristic 'bird's nest' shape.",
            "usages": "Valuable in wildflower meadows and for attracting predatory insects.",
            "plantingTime": "Sow seeds in late summer or autumn."
        },
        {
            "name": "Red Clover",
            "scientificName": "Trifolium pratense",
            "category": "Wildflower",
            "height": "15 - 40 cm",
            "pollinators": ["Bumblebees", "Butterflies", "Moths"],
            "benefits": "A highly valuable nectar source and excellent nitrogen fixer for the soil.",
            "plantingTip": "Tolerates most soils. Great for meadow lawns.",
            "colorClass": "bg-wildflower",
            "description": "A familiar meadow perennial with distinctive trefoil leaves (often bearing a white crescent marking) and pinkish-red, globe-shaped flower heads.",
            "usages": "Important component of wildlife lawns, meadows, and agricultural leys.",
            "plantingTime": "Sow in spring or autumn."
        },
        {
            "name": "White Campion",
            "scientificName": "Silene latifolia",
            "category": "Wildflower",
            "height": "30 - 100 cm",
            "pollinators": ["Moths"],
            "benefits": "Flowers emit a sweet clove-like scent in the evening to attract night-flying moths.",
            "plantingTip": "Well-drained soil in full sun or part shade.",
            "colorClass": "bg-wildflower",
            "description": "An upright, slightly hairy perennial with opposite leaves and pure white, deeply notched petals on flowers that open fully in the late afternoon.",
            "usages": "Perfect for night gardens and supporting nocturnal pollinator populations.",
            "plantingTime": "Sow seeds in spring or autumn."
        },
        {
            "name": "Betony",
            "scientificName": "Betonica officinalis",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": ["Bees", "Butterflies", "Hoverflies"],
            "benefits": "Striking magenta-purple flower spikes above neat rosettes of scalloped leaves.",
            "plantingTip": "Grows well in heavy clay or moderately fertile soils.",
            "colorClass": "bg-wildflower",
            "description": "A very attractive native perennial of grasslands and open woods, producing dense, short spikes of vivid purplish-red hooded flowers on square stems.",
            "usages": "Ideal for herbaceous borders, meadow planting, and traditional herb gardens.",
            "plantingTime": "Plant out from spring to autumn."
        },
        {
            "name": "Common Mallow",
            "scientificName": "Malva sylvestris",
            "category": "Perennial",
            "height": "60 - 120 cm",
            "pollinators": ["Bees", "Hoverflies"],
            "benefits": "Showy deep pink-purple flowers with dark veins, blooming profusely through summer.",
            "plantingTip": "Very easily grown in most soils. Can self-seed vigorously.",
            "colorClass": "bg-wildflower",
            "description": "A robust, bushy perennial with deeply lobed leaves and highly attractive, large, pink-purple flowers streaked with darker veins.",
            "usages": "Excellent for sunny banks, borders, and cottage garden styles.",
            "plantingTime": "Sow seeds or plant out in spring."
        },
        {
            "name": "Yellow Horned Poppy",
            "scientificName": "Glaucium flavum",
            "category": "Perennial",
            "height": "30 - 90 cm",
            "pollinators": ["Bees", "Hoverflies"],
            "benefits": "Striking silvery-blue foliage and large, bright yellow flowers.",
            "plantingTip": "Needs extremely well-drained, sandy or shingly soil. Found naturally on coasts.",
            "colorClass": "bg-wildflower",
            "description": "A spectacular coastal perennial known for its beautiful glaucous wavy leaves, large brilliant yellow poppy flowers, and extremely long curved seed pods.",
            "usages": "Perfect for gravel gardens, coastal exposures, and dry sandy beds.",
            "plantingTime": "Sow seeds in autumn or spring."
        },
        {
            "name": "Wild Strawberry",
            "scientificName": "Fragaria vesca",
            "category": "Perennial",
            "height": "10 - 30 cm",
            "pollinators": ["Small Bees", "Hoverflies"],
            "benefits": "Provides ground cover and small, intensely sweet, edible fruits.",
            "plantingTip": "Great for dappled woodland shade or edging borders.",
            "colorClass": "bg-wildflower",
            "description": "A creeping perennial that spreads by stolons, featuring small white flowers followed by distinctive, tiny, highly aromatic red strawberries.",
            "usages": "Excellent edible ground cover for woodland gardens or underplanting.",
            "plantingTime": "Plant runners or sow seeds in spring or autumn."
        },
        {
            "name": "Greater Knapweed",
            "scientificName": "Centaurea scabiosa",
            "category": "Perennial",
            "height": "50 - 90 cm",
            "pollinators": ["Butterflies", "Bumblebees", "Finches"],
            "benefits": "Large, showy, thistle-like magenta flower heads without the spines.",
            "plantingTip": "Thrives on chalky or limestone soils in full sun.",
            "colorClass": "bg-wildflower",
            "description": "A robust, deep-rooted perennial with deeply pinnate leaves and large, prominent magenta-purple flower heads surrounded by a dark fringed involucre.",
            "usages": "Fantastic for chalk downland meadows and a magnet for butterflies.",
            "plantingTime": "Plant bare-root or potted specimens in spring or autumn."
        },
        {
            "name": "Guelder Rose",
            "scientificName": "Viburnum opulus",
            "category": "Shrub",
            "height": "2 - 4 m",
            "pollinators": [
                "Hoverflies",
                "Moths",
                "Bees"
            ],
            "benefits": "Spectacular lacecap white flowers in spring, followed by translucent red berries.",
            "plantingTip": "Prefers damp, reasonably fertile soils. Beautiful when mixed into native hedgerows.",
            "colorClass": "bg-tree",
            "description": "A glorious native deciduous shrub that features maple-like lobed leaves. In late spring it produces flat heads of creamy-white flowers, turning to ruby-red berries in autumn.",
            "usages": "Essential for wildlife-friendly hedging or damp woodland edges.",
            "plantingTime": "Plant bare-root between November and March."
        },
        {
            "name": "Meadowsweet",
            "scientificName": "Filipendula ulmaria",
            "category": "Perennial",
            "height": "60 - 120 cm",
            "pollinators": [
                "Bees",
                "Hoverflies"
            ],
            "benefits": "Produces large, fluffy, sweetly scented clouds of cream flowers.",
            "plantingTip": "Requires moist soil; thrives alongside ponds or wet ditches.",
            "colorClass": "bg-wildflower",
            "description": "A tall, majestic damp-meadow perennial with distinctively veined, dark green leaflets and dense, frothy clusters of almond-scented creamy-white flowers.",
            "usages": "Unbeatable for bog gardens and damp meadow plantings.",
            "plantingTime": "Plant out in spring or autumn into reliably moist soil."
        },
        {
            "name": "Common Comfrey",
            "scientificName": "Symphytum officinale",
            "category": "Perennial",
            "height": "80 - 120 cm",
            "pollinators": [
                "Bumblebees",
                "Mason Bees"
            ],
            "benefits": "One of the most powerful nectar producers. Tubular bell flowers recharge nectar rapidly.",
            "plantingTip": "Has a deep taproot. Do not plant where you might want to remove it later.",
            "colorClass": "bg-wildflower",
            "description": "A vigorous, bristly perennial that forms large clumps. Through summer it unfurls characteristic drooping clusters of tubular flowers.",
            "usages": "Incredible for bumblebees. Leaves can be harvested to make exceptionally rich liquid organic fertilizer.",
            "plantingTime": "Sow seeds or plant root cuttings in spring."
        },
        {
            "name": "Yellow Flag Iris",
            "scientificName": "Iris pseudacorus",
            "category": "Perennial",
            "height": "1 - 1.5 m",
            "pollinators": [
                "Hoverflies",
                "Long-tongued Bees"
            ],
            "benefits": "Striking architectural foliage and massive bright yellow summer blooms.",
            "plantingTip": "Can be incredibly vigorous in shallow water. Submerge in aquatic baskets to restrict spread.",
            "colorClass": "bg-wildflower",
            "description": "A bold, robust aquatic and marginal perennial featuring tall, sword-like leaves and vivid yellow flowers.",
            "usages": "Perfect for large wildlife ponds. Provides vital emergence supports for aquatic dragonfly nymphs.",
            "plantingTime": "Plant rhizomes just below the soil surface in spring."
        },
        {
            "name": "Cuckooflower",
            "scientificName": "Cardamine pratensis",
            "category": "Perennial",
            "height": "30 - 50 cm",
            "pollinators": [
                "Orange-tip Butterfly (Host)"
            ],
            "benefits": "The primary larval food plant for the iconic Orange-tip butterfly.",
            "plantingTip": "Prefers consistently damp grass or meadow conditions. Do not mow until mid-summer.",
            "colorClass": "bg-wildflower",
            "description": "Also known as Lady's Smock, this delicate, moisture-loving perennial puts up slender stems holding pale lilac flowers around the time the first cuckoos are heard.",
            "usages": "Crucial for wetland or damp meadow restoration.",
            "plantingTime": "Plant 'in the green' in spring or sow fresh seed in late summer."
        },
        {
            "name": "Herb Robert",
            "scientificName": "Geranium robertianum",
            "category": "Perennial",
            "height": "20 - 40 cm",
            "pollinators": [
                "Small Bees",
                "Hoverflies"
            ],
            "benefits": "Adaptable scrambling foliage that often turns deep crimson. Tiny bright pink flowers.",
            "plantingTip": "Self-seeds prolifically in shady, dry, or awkward spots.",
            "colorClass": "bg-wildflower",
            "description": "A common but valuable native woodland geranium with fern-like leaves on reddish stems. It produces starry vivid pink flowers.",
            "usages": "Excellent for dry shade, underplanting hedges, or filling gaps in stony ground.",
            "plantingTime": "Sow seeds from spring to late summer."
        },
        {
            "name": "Viper's Bugloss",
            "scientificName": "Echium vulgare",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Red Mason Bees",
                "Garden Bumblebees",
                "Painted Lady Butterflies"
            ],
            "benefits": "A magnet for long-tongued insects. Bright blue funnel flower spikes. Uniquely high daily nectar production rate.",
            "plantingTip": "Enjoys dry, sandy, gravelly, or chalky soils. Self-seeding; press seed gently into the surface of the soil during autumn.",
            "colorClass": "bg-wildflower",
            "description": "A spectacular biennial wildflower forming impressive tall spikes laden with vivid blue, funnel-shaped blossoms from June to September. Its bristly, lance-shaped leaves provide a textured backdrop.",
            "usages": "Ideal for unstructured meadow plantings, dry gravel beds, or rocky coastal margins. Often used to create dynamic vertical elements in dry situations.",
            "plantingTime": "Sow seeds directly in late summer or early autumn for germination the following spring."
        },
        {
            "name": "Wild Marjoram",
            "scientificName": "Origanum vulgare",
            "category": "Wildflower / Herb",
            "height": "20 - 50 cm",
            "pollinators": [
                "Common Blue Butterflies",
                "Gatekeeper Butterflies",
                "Honeybees",
                "Hoverflies"
            ],
            "benefits": "Aromatic pink flower heads. Supports a vast variety of butterflies and provides highly nutritious medicinal oils for visiting insects.",
            "plantingTip": "Thrives in dry, well-draining soils with alkaline pH. Trim back in late autumn after flowering to encourage fresh bushiness.",
            "colorClass": "bg-wildflower",
            "description": "A robust, bushy perennial herb with soft rounded leaves and clustered domed heads of tubular pinkish-purple flowers that act as a veritable feast for summer pollinators.",
            "usages": "Perfect for herb gardens, sunny borders, and gravel courtyards. The leaves can be used dried or fresh to season Mediterranean-style dishes.",
            "plantingTime": "Plant out small plugs in spring or sow seeds in well-draining soil from April to May."
        },
        {
            "name": "Foxglove",
            "scientificName": "Digitalis purpurea",
            "category": "Biennial",
            "height": "1 - 2 m",
            "pollinators": [
                "Bumblebees",
                "Moths"
            ],
            "benefits": "Tall spires of purple-pink bells. Excellent for deep-throated bees.",
            "plantingTip": "Poisonous. Thrives in woodland edges and disturbed soils.",
            "colorClass": "bg-wildflower",
            "description": "A classic woodland biennial producing a magnificent, very tall vertical spire of nodding, tubular pink-purple flowers, heavily speckled on their interior lip.",
            "usages": "Brings architectural presence to the back of shaded borders, woodland edges, and dappled clearings. Do not plant near edible crops or ingest.",
            "plantingTime": "Sow seeds directly outdoors in late spring/early summer. Will produce rosettes year one, flowers year two."
        },
        {
            "name": "Hawthorn",
            "scientificName": "Crataegus monogyna",
            "category": "Tree/Shrub",
            "height": "Up to 8m",
            "pollinators": [
                "Bees",
                "Moths",
                "Birds"
            ],
            "benefits": "Masses of white May blossom. Deep red autumn berries.",
            "plantingTip": "Excellent hedging plant. Prune in winter.",
            "colorClass": "bg-tree",
            "description": "A robust, thorny native shrub or small tree. Famed for its dense, explosive clusters of heavily scented white blossom in May.",
            "usages": "The supreme backbone of British hedgerows. Makes exceptional windbreaks and boundary hedges while hosting hundreds of insect species.",
            "plantingTime": "Plant bare-root hedging whips between November and early March during the dormant period."
        },
        {
            "name": "Oxeye Daisy",
            "scientificName": "Leucanthemum vulgare",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": [
                "Hoverflies",
                "Beetles"
            ],
            "benefits": "Classic white daisy with yellow centre. Excellent for beetles.",
            "plantingTip": "Very tough, thrives in open grassland and poor soils.",
            "colorClass": "bg-wildflower",
            "description": "A rugged, classic meadow perennial throwing up a rosette of dark green spoon-shaped foliage and tall sturdy stems holding remarkably large, shining white daisy flowers with bright yellow discs.",
            "usages": "The defining white splash in any summer meadow schema. Readily establishes in poorer soils and provides structural integrity to soft grasses.",
            "plantingTime": "Sow selectively in autumn for best results, or insert plugs during the moist spring period."
        },
        {
            "name": "Water Avens",
            "scientificName": "Geum rivale",
            "category": "Perennial",
            "height": "20 - 45 cm",
            "pollinators": [
                "Bumblebees"
            ],
            "benefits": "Nodding pink/orange bell flowers. Great for damp areas.",
            "plantingTip": "Needs moist or wet soil. Perfect for bog gardens.",
            "colorClass": "bg-wildflower",
            "description": "An elegantly drooping perennial that presents nodding bell-like flowers exhibiting muted, coppery-pink petals emerging from deep reddish-purple sepals.",
            "usages": "Flourishes in damp meadows, stream margins, and bog gardens. Combines beautifully with marsh marigolds and rushes.",
            "plantingTime": "Sow fresh seeds directly in late summer, or divide mature clustered rhizomes in spring."
        },
        {
            "name": "Meadow Buttercup",
            "scientificName": "Ranunculus acris",
            "category": "Perennial",
            "height": "30 - 70 cm",
            "pollinators": [
                "Hoverflies",
                "Small Moths"
            ],
            "benefits": "Tall graceful stems with shiny golden yellow flowers.",
            "plantingTip": "Thrives in moist grasslands.",
            "colorClass": "bg-wildflower",
            "description": "A tall, airy, upright native buttercup with highly dissected angular leaves and incredibly glossy, waxy golden-yellow saucer flowers catching the summer light.",
            "usages": "Best woven sparsely into traditional meadow mixtures where its buttercup gold adds vibrant punctuation.",
            "plantingTime": "Sow seed directly in very late summer/early autumn to undergo required cold stratification."
        },
        {
            "name": "Ivy",
            "scientificName": "Hedera helix",
            "category": "Climber",
            "height": "Up to 20m",
            "pollinators": [
                "Late season bees",
                "Wasps",
                "Hoverflies"
            ],
            "benefits": "Crucial late autumn nectar source. Berries feed birds in late winter.",
            "plantingTip": "Can be invasive if unchecked. Mature climbing forms produce flowers.",
            "colorClass": "bg-shrub",
            "description": "An evergreen, woody climber clinging via aerial roots. Mature forms morph into bushy, non-climbing branches that produce spherical umbels of vital late-season yellowish green flowers.",
            "usages": "Critical late nectar resource for wasps and bees before winter. Provides irreplaceable dense, warm nesting shelter for birds.",
            "plantingTime": "Plant year-round, ideally in autumn or spring, checking vigorously if grown near structural brickwork."
        },
        {
            "name": "Snowdrop",
            "scientificName": "Galanthus nivalis",
            "category": "Bulb",
            "height": "10 - 15 cm",
            "pollinators": [
                "Earliest emerging bees"
            ],
            "benefits": "First flowers of the year. Essential lifeline for early wakers.",
            "plantingTip": "Plant 'in the green' just after flowering for best results.",
            "colorClass": "bg-wildflower",
            "description": "The ultimate harbinger of spring. These familiar tiny bulbs hoist perfect, intricate, inverted white drops, subtly marked with green on the inner segments.",
            "usages": "The cornerstone of any woodland garden, drifting under deciduous trees, hedges, and bare winter shrubs.",
            "plantingTime": "Must be planted 'in the green' (immediately after finishing flowering with leaves intact) for the highest success rate."
        },
        {
            "name": "Sea Campion",
            "scientificName": "Silene uniflora",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "Moths",
                "Bees"
            ],
            "benefits": "Mat-forming with white balloon-like flowers.",
            "plantingTip": "Extremely tough, shingle/cliff specialist. Great in dry pots.",
            "colorClass": "bg-wildflower",
            "description": "Similar to Bladder Campion but forms a much lower, dense cascading mat of grey-green foliage studded with large white flowers containing deeply inflated, distinct sepals.",
            "usages": "Perfect for cascading over low walls, hanging from dry stone crevices, or framing paths in coastal gardens.",
            "plantingTime": "Sow seeds in spring or take soft cuttings from non-flowering shoots in early summer."
        }
    ],
    "coastal_part_sun": [
        {
            "name": "Viper's Bugloss",
            "scientificName": "Echium vulgare",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Red Mason Bees",
                "Garden Bumblebees",
                "Painted Lady Butterflies"
            ],
            "benefits": "A magnet for long-tongued insects. Bright blue funnel flower spikes. Uniquely high daily nectar production rate.",
            "plantingTip": "Enjoys dry, sandy, gravelly, or chalky soils. Self-seeding; press seed gently into the surface of the soil during autumn.",
            "colorClass": "bg-wildflower",
            "description": "A spectacular biennial wildflower forming impressive tall spikes laden with vivid blue, funnel-shaped blossoms from June to September. Its bristly, lance-shaped leaves provide a textured backdrop.",
            "usages": "Ideal for unstructured meadow plantings, dry gravel beds, or rocky coastal margins. Often used to create dynamic vertical elements in dry situations.",
            "plantingTime": "Sow seeds directly in late summer or early autumn for germination the following spring."
        },
        {
            "name": "Wild Marjoram",
            "scientificName": "Origanum vulgare",
            "category": "Wildflower / Herb",
            "height": "20 - 50 cm",
            "pollinators": [
                "Common Blue Butterflies",
                "Gatekeeper Butterflies",
                "Honeybees",
                "Hoverflies"
            ],
            "benefits": "Aromatic pink flower heads. Supports a vast variety of butterflies and provides highly nutritious medicinal oils for visiting insects.",
            "plantingTip": "Thrives in dry, well-draining soils with alkaline pH. Trim back in late autumn after flowering to encourage fresh bushiness.",
            "colorClass": "bg-wildflower",
            "description": "A robust, bushy perennial herb with soft rounded leaves and clustered domed heads of tubular pinkish-purple flowers that act as a veritable feast for summer pollinators.",
            "usages": "Perfect for herb gardens, sunny borders, and gravel courtyards. The leaves can be used dried or fresh to season Mediterranean-style dishes.",
            "plantingTime": "Plant out small plugs in spring or sow seeds in well-draining soil from April to May."
        },
        {
            "name": "Foxglove",
            "scientificName": "Digitalis purpurea",
            "category": "Biennial",
            "height": "1 - 2 m",
            "pollinators": [
                "Bumblebees",
                "Moths"
            ],
            "benefits": "Tall spires of purple-pink bells. Excellent for deep-throated bees.",
            "plantingTip": "Poisonous. Thrives in woodland edges and disturbed soils.",
            "colorClass": "bg-wildflower",
            "description": "A classic woodland biennial producing a magnificent, very tall vertical spire of nodding, tubular pink-purple flowers, heavily speckled on their interior lip.",
            "usages": "Brings architectural presence to the back of shaded borders, woodland edges, and dappled clearings. Do not plant near edible crops or ingest.",
            "plantingTime": "Sow seeds directly outdoors in late spring/early summer. Will produce rosettes year one, flowers year two."
        },
        {
            "name": "Hawthorn",
            "scientificName": "Crataegus monogyna",
            "category": "Tree/Shrub",
            "height": "Up to 8m",
            "pollinators": [
                "Bees",
                "Moths",
                "Birds"
            ],
            "benefits": "Masses of white May blossom. Deep red autumn berries.",
            "plantingTip": "Excellent hedging plant. Prune in winter.",
            "colorClass": "bg-tree",
            "description": "A robust, thorny native shrub or small tree. Famed for its dense, explosive clusters of heavily scented white blossom in May.",
            "usages": "The supreme backbone of British hedgerows. Makes exceptional windbreaks and boundary hedges while hosting hundreds of insect species.",
            "plantingTime": "Plant bare-root hedging whips between November and early March during the dormant period."
        },
        {
            "name": "Oxeye Daisy",
            "scientificName": "Leucanthemum vulgare",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": [
                "Hoverflies",
                "Beetles"
            ],
            "benefits": "Classic white daisy with yellow centre. Excellent for beetles.",
            "plantingTip": "Very tough, thrives in open grassland and poor soils.",
            "colorClass": "bg-wildflower",
            "description": "A rugged, classic meadow perennial throwing up a rosette of dark green spoon-shaped foliage and tall sturdy stems holding remarkably large, shining white daisy flowers with bright yellow discs.",
            "usages": "The defining white splash in any summer meadow schema. Readily establishes in poorer soils and provides structural integrity to soft grasses.",
            "plantingTime": "Sow selectively in autumn for best results, or insert plugs during the moist spring period."
        },
        {
            "name": "Water Avens",
            "scientificName": "Geum rivale",
            "category": "Perennial",
            "height": "20 - 45 cm",
            "pollinators": [
                "Bumblebees"
            ],
            "benefits": "Nodding pink/orange bell flowers. Great for damp areas.",
            "plantingTip": "Needs moist or wet soil. Perfect for bog gardens.",
            "colorClass": "bg-wildflower",
            "description": "An elegantly drooping perennial that presents nodding bell-like flowers exhibiting muted, coppery-pink petals emerging from deep reddish-purple sepals.",
            "usages": "Flourishes in damp meadows, stream margins, and bog gardens. Combines beautifully with marsh marigolds and rushes.",
            "plantingTime": "Sow fresh seeds directly in late summer, or divide mature clustered rhizomes in spring."
        },
        {
            "name": "Meadow Buttercup",
            "scientificName": "Ranunculus acris",
            "category": "Perennial",
            "height": "30 - 70 cm",
            "pollinators": [
                "Hoverflies",
                "Small Moths"
            ],
            "benefits": "Tall graceful stems with shiny golden yellow flowers.",
            "plantingTip": "Thrives in moist grasslands.",
            "colorClass": "bg-wildflower",
            "description": "A tall, airy, upright native buttercup with highly dissected angular leaves and incredibly glossy, waxy golden-yellow saucer flowers catching the summer light.",
            "usages": "Best woven sparsely into traditional meadow mixtures where its buttercup gold adds vibrant punctuation.",
            "plantingTime": "Sow seed directly in very late summer/early autumn to undergo required cold stratification."
        },
        {
            "name": "Ivy",
            "scientificName": "Hedera helix",
            "category": "Climber",
            "height": "Up to 20m",
            "pollinators": [
                "Late season bees",
                "Wasps",
                "Hoverflies"
            ],
            "benefits": "Crucial late autumn nectar source. Berries feed birds in late winter.",
            "plantingTip": "Can be invasive if unchecked. Mature climbing forms produce flowers.",
            "colorClass": "bg-shrub",
            "description": "An evergreen, woody climber clinging via aerial roots. Mature forms morph into bushy, non-climbing branches that produce spherical umbels of vital late-season yellowish green flowers.",
            "usages": "Critical late nectar resource for wasps and bees before winter. Provides irreplaceable dense, warm nesting shelter for birds.",
            "plantingTime": "Plant year-round, ideally in autumn or spring, checking vigorously if grown near structural brickwork."
        },
        {
            "name": "Snowdrop",
            "scientificName": "Galanthus nivalis",
            "category": "Bulb",
            "height": "10 - 15 cm",
            "pollinators": [
                "Earliest emerging bees"
            ],
            "benefits": "First flowers of the year. Essential lifeline for early wakers.",
            "plantingTip": "Plant 'in the green' just after flowering for best results.",
            "colorClass": "bg-wildflower",
            "description": "The ultimate harbinger of spring. These familiar tiny bulbs hoist perfect, intricate, inverted white drops, subtly marked with green on the inner segments.",
            "usages": "The cornerstone of any woodland garden, drifting under deciduous trees, hedges, and bare winter shrubs.",
            "plantingTime": "Must be planted 'in the green' (immediately after finishing flowering with leaves intact) for the highest success rate."
        },
        {
            "name": "Sea Campion",
            "scientificName": "Silene uniflora",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "Moths",
                "Bees"
            ],
            "benefits": "Mat-forming with white balloon-like flowers.",
            "plantingTip": "Extremely tough, shingle/cliff specialist. Great in dry pots.",
            "colorClass": "bg-wildflower",
            "description": "Similar to Bladder Campion but forms a much lower, dense cascading mat of grey-green foliage studded with large white flowers containing deeply inflated, distinct sepals.",
            "usages": "Perfect for cascading over low walls, hanging from dry stone crevices, or framing paths in coastal gardens.",
            "plantingTime": "Sow seeds in spring or take soft cuttings from non-flowering shoots in early summer."
        }
    ],
    "coastal_part_shade": [
        {
            "name": "Viper's Bugloss",
            "scientificName": "Echium verna",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Red Mason Bees",
                "Garden Bumblebees",
                "Painted Lady Butterflies"
            ],
            "benefits": "A magnet for long-tongued insects. Bright blue funnel flower spikes. Uniquely high daily nectar production rate.",
            "plantingTip": "Enjoys dry, sandy, gravelly, or chalky soils. Self-seeding; press seed gently into the surface of the soil during autumn.",
            "colorClass": "bg-wildflower",
            "description": "A spectacular biennial wildflower forming impressive tall spikes laden with vivid blue, funnel-shaped blossoms from June to September. Its bristly, lance-shaped leaves provide a textured backdrop.",
            "usages": "Ideal for unstructured meadow plantings, dry gravel beds, or rocky coastal margins. Often used to create dynamic vertical elements in dry situations.",
            "plantingTime": "Sow seeds directly in late summer or early autumn for germination the following spring."
        },
        {
            "name": "Common Knapweed",
            "scientificName": "Centaurea nigra",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": [
                "Butterflies",
                "Finches (seeds)"
            ],
            "benefits": "Thistle-like purple flower heads without the spines.",
            "plantingTip": "Easily grown in any meadow or border setting.",
            "colorClass": "bg-wildflower",
            "description": "A tough, heavily branched meadow perennial featuring deeply lobed basal leaves and hard 'black' scaly buds that burst open into stunning, ragged, neon purple fireworks.",
            "usages": "An absolute powerhouse for pollinator strips. Retains structural silhouettes securely throughout deep winter, feeding finches.",
            "plantingTime": "Sow directly in late summer or autumn. Performs excellently in clay or loam meadows."
        },
        {
            "name": "Toadflax",
            "scientificName": "Linaria vulgaris",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": [
                "Bumblebees"
            ],
            "benefits": "Yellow snapdragon-like flowers with orange centres.",
            "plantingTip": "Spreads easily, good for waste ground or stony areas.",
            "colorClass": "bg-wildflower",
            "description": "An upright, branching perennial mimicking miniature yellow and orange snapdragons. It throws vertical spikes carrying these incredibly vibrant, small-scaled blooms densely.",
            "usages": "Highly beneficial for difficult areas facing steep dry conditions, like rough banks, gravel, or railway borders.",
            "plantingTime": "Sow direct thinly in spring once soils warm up fully."
        },
        {
            "name": "Yarrow",
            "scientificName": "Achillea millefolium",
            "category": "Perennial",
            "height": "30 - 50 cm",
            "pollinators": [
                "Small insects",
                "Hoverflies"
            ],
            "benefits": "Flat-topped white or pink flowerheads.",
            "plantingTip": "Drought resistant, spreads easily.",
            "colorClass": "bg-wildflower",
            "description": "A resilient, spreading perennial bearing feathery, aromatic, highly divided dark green leaves and wide, completely flat-topped clusters of minute white to pale pink flowers.",
            "usages": "A wonderful landing pad for beetles and hoverflies. Drought resistant and excellent for the front of dry, sandy borders.",
            "plantingTime": "Can be sown outdoors almost any time from spring to late summer on a finely raked surface."
        },
        {
            "name": "Devil's-bit Scabious",
            "scientificName": "Succisa pratensis",
            "category": "Perennial",
            "height": "30 - 80 cm",
            "pollinators": [
                "Marsh Fritillary",
                "Bees"
            ],
            "benefits": "Blue-purple spheres. Essential late summer nectar source.",
            "plantingTip": "Prefers damp, acidic soils and marshy areas.",
            "colorClass": "bg-wildflower",
            "description": "A late-flowering perennial bearing quite un-notched, hairy basal leaves and holding deeply violet-blue, perfectly hemispherical pincushion flowerheads on delicate tall branching stems.",
            "usages": "Provides absolutely crucial high-impact nectar just before autumn closes in, particularly in damp conditions or marshy sites.",
            "plantingTime": "Sow fresh un-dried seed in autumn for frost cracking, or divide large clumps post-flowering in late autumn."
        },
        {
            "name": "Water Avens",
            "scientificName": "Geum rivale",
            "category": "Perennial",
            "height": "20 - 45 cm",
            "pollinators": [
                "Bumblebees"
            ],
            "benefits": "Nodding pink/orange bell flowers. Great for damp areas.",
            "plantingTip": "Needs moist or wet soil. Perfect for bog gardens.",
            "colorClass": "bg-wildflower",
            "description": "An elegantly drooping perennial that presents nodding bell-like flowers exhibiting muted, coppery-pink petals emerging from deep reddish-purple sepals.",
            "usages": "Flourishes in damp meadows, stream margins, and bog gardens. Combines beautifully with marsh marigolds and rushes.",
            "plantingTime": "Sow fresh seeds directly in late summer, or divide mature clustered rhizomes in spring."
        },
        {
            "name": "Oxeye Daisy",
            "scientificName": "Leucanthemum vulgare",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": [
                "Hoverflies",
                "Beetles"
            ],
            "benefits": "Classic white daisy with yellow centre. Excellent for beetles.",
            "plantingTip": "Very tough, thrives in open grassland and poor soils.",
            "colorClass": "bg-wildflower",
            "description": "A rugged, classic meadow perennial throwing up a rosette of dark green spoon-shaped foliage and tall sturdy stems holding remarkably large, shining white daisy flowers with bright yellow discs.",
            "usages": "The defining white splash in any summer meadow schema. Readily establishes in poorer soils and provides structural integrity to soft grasses.",
            "plantingTime": "Sow selectively in autumn for best results, or insert plugs during the moist spring period."
        },
        {
            "name": "Blackthorn",
            "scientificName": "Prunus spinosa",
            "category": "Tree/Shrub",
            "height": "Up to 4m",
            "pollinators": [
                "Early Bees",
                "Moths"
            ],
            "benefits": "Clouds of early white blossom. Produces sloes for winter birds.",
            "plantingTip": "Suckers strongly. Forms dense impenetrable thorny thicket.",
            "colorClass": "bg-tree",
            "description": "A densely branching, fiercely thorny shrub that precedes hawthorn by flowering on bare wood with pure white blossoms, later bearing astringent purple sloes.",
            "usages": "Fantastic mixed into hedgerows to create stock-proof, animal-friendly security thickets.",
            "plantingTime": "Plant bare-rooted in deep winter (Nov-Feb). Beware its tendency to sucker vigorously."
        },
        {
            "name": "Marsh Marigold",
            "scientificName": "Caltha palustris",
            "category": "Perennial",
            "height": "30 - 50 cm",
            "pollinators": [
                "Early hoverflies",
                "Bees"
            ],
            "benefits": "Large waxy golden cup flowers. Brilliant early pollen.",
            "plantingTip": "Plant closely to water edge or in shallow pond margins.",
            "colorClass": "bg-wildflower",
            "description": "A robust perennial forming low, lush mounds of large kidney-shaped glossy leaves, studded with brilliant golden, waxy, buttercup-like early flowers.",
            "usages": "Ideal for the shallow margins of garden wildlife ponds, bog gardens, or damp woodland ditches.",
            "plantingTime": "Plant firmly into wet margins during late spring or divide massive mature clamps just after flowering."
        },
        {
            "name": "Hawthorn",
            "scientificName": "Crataegus monogyna",
            "category": "Tree/Shrub",
            "height": "Up to 8m",
            "pollinators": [
                "Bees",
                "Moths",
                "Birds"
            ],
            "benefits": "Masses of white May blossom. Deep red autumn berries.",
            "plantingTip": "Excellent hedging plant. Prune in winter.",
            "colorClass": "bg-tree",
            "description": "A robust, thorny native shrub or small tree. Famed for its dense, explosive clusters of heavily scented white blossom in May.",
            "usages": "The supreme backbone of British hedgerows. Makes exceptional windbreaks and boundary hedges while hosting hundreds of insect species.",
            "plantingTime": "Plant bare-root hedging whips between November and early March during the dormant period."
        }
    ],
    "coastal_full_shade": [
        {
            "name": "Red Campion",
            "scientificName": "Silene dioica",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Long-tongued Bumblebees",
                "Hoverflies"
            ],
            "benefits": "Bright pink flowers. Vital spring nectar.",
            "plantingTip": "Adaptable, enjoys somewhat damp, fertile soils.",
            "colorClass": "bg-wildflower",
            "description": "An enduring, loosely branching perennial with slightly hairy, rounded leaves. Generates masses of striking rich pink, deeply notched blooms across the spring and summer.",
            "usages": "Flourishes wonderfully along hedge bottoms, dappled woodland walks, and informal herbaceous situations.",
            "plantingTime": "Sow outdoors in autumn or spring. Self-seeds very reliably in suitable soils."
        },
        {
            "name": "Primrose",
            "scientificName": "Primula vulgaris",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "Brimstone Butterflies",
                "Early Bees"
            ],
            "benefits": "Classic pale yellow spring flowers. Important early nectar source.",
            "plantingTip": "Needs moist, shady spots. Great under deciduous trees.",
            "colorClass": "bg-wildflower",
            "description": "A charming, low-lying perennial that carpets the early spring ground with pale, buttery yellow rosettes with a remarkably subtle, sweet fragrance.",
            "usages": "A staple for early nectar. Excels planted under deciduous trees, in lightly shaded borders, or tucked neatly into shady orchard grasses.",
            "plantingTime": "Buy 'in the green' directly after flowering in spring, or divide mature clumps in early autumn."
        },
        {
            "name": "Bluebell",
            "scientificName": "Hyacinthoides non-scripta",
            "category": "Bulb",
            "height": "20 - 40 cm",
            "pollinators": [
                "Brimstone",
                "Bees"
            ],
            "benefits": "Carpets ancient woodland in deep violet-blue. Scented.",
            "plantingTip": "Must ensure native stock (non-scripta), plant in autumn.",
            "colorClass": "bg-wildflower",
            "description": "A highly celebrated woodland bulb setting forth strap-like leaves and gently drooping, one-sided flower spikes filled with strongly scented, deep violet-blue bells.",
            "usages": "Creates magical woodland carpets under deciduous canopies and mature hedges. Essential to ensure pure native non-scripta forms are used.",
            "plantingTime": "Plant dormant bulbs deeply in the autumn, or lift and divide congested clumps 'in the green' late spring."
        },
        {
            "name": "Foxglove",
            "scientificName": "Digitalis purpurea",
            "category": "Biennial",
            "height": "1 - 2 m",
            "pollinators": [
                "Bumblebees",
                "Moths"
            ],
            "benefits": "Tall spires of purple-pink bells. Excellent for deep-throated bees.",
            "plantingTip": "Poisonous. Thrives in woodland edges and disturbed soils.",
            "colorClass": "bg-wildflower",
            "description": "A classic woodland biennial producing a magnificent, very tall vertical spire of nodding, tubular pink-purple flowers, heavily speckled on their interior lip.",
            "usages": "Brings architectural presence to the back of shaded borders, woodland edges, and dappled clearings. Do not plant near edible crops or ingest.",
            "plantingTime": "Sow seeds directly outdoors in late spring/early summer. Will produce rosettes year one, flowers year two."
        },
        {
            "name": "Snowdrop",
            "scientificName": "Galanthus nivalis",
            "category": "Bulb",
            "height": "10 - 15 cm",
            "pollinators": [
                "Earliest emerging bees"
            ],
            "benefits": "First flowers of the year. Essential lifeline for early wakers.",
            "plantingTip": "Plant 'in the green' just after flowering for best results.",
            "colorClass": "bg-wildflower",
            "description": "The ultimate harbinger of spring. These familiar tiny bulbs hoist perfect, intricate, inverted white drops, subtly marked with green on the inner segments.",
            "usages": "The cornerstone of any woodland garden, drifting under deciduous trees, hedges, and bare winter shrubs.",
            "plantingTime": "Must be planted 'in the green' (immediately after finishing flowering with leaves intact) for the highest success rate."
        },
        {
            "name": "Wild Garlic",
            "scientificName": "Allium ursinum",
            "category": "Bulb",
            "height": "20 - 45 cm",
            "pollinators": [
                "Hoverflies",
                "Bees",
                "Beetles"
            ],
            "benefits": "White starry flowers with strong garlic scent. Edible.",
            "plantingTip": "Spreads vigorously in damp shade woodland conditions.",
            "colorClass": "bg-wildflower",
            "description": "An energetic bulbous perennial. Known for lush, wide green lance-like leaves emitting a potent garlic aroma, topped with spectacular, starry white flower umbels.",
            "usages": "Creates enchanting drifts in damp, shaded woodland margins. A highly renowned forager's favourite for spring pestos.",
            "plantingTime": "Plant bulbs 'in the green' in spring or dry bulbs in late autumn into damp, leafy soil."
        },
        {
            "name": "Bugle",
            "scientificName": "Ajuga reptans",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "White-tailed Bumblebees"
            ],
            "benefits": "Spikes of blue flowers over dark semi-evergreen creeping foliage.",
            "plantingTip": "Excellent groundcover for damp or shaded soils.",
            "colorClass": "bg-wildflower",
            "description": "A mat-forming, creeping perennial throwing up short vertical spikes tightly packed with dark blue, two-lipped flowers above metallic or bronze trailing leaves.",
            "usages": "A hard-working ground cover for challenging damp, shaded spots, acting as a low, weed-suppressing carpet.",
            "plantingTime": "Plant plugs or divisions in spring or early autumn to establish rapid root cover."
        },
        {
            "name": "Lesser Celandine",
            "scientificName": "Ficaria verna",
            "category": "Perennial",
            "height": "5 - 15 cm",
            "pollinators": [
                "Early queen bumblebees"
            ],
            "benefits": "Bright yellow stars in earliest spring.",
            "plantingTip": "Dies back in summer. Beware of spreading in small borders.",
            "colorClass": "bg-wildflower",
            "description": "A ground-hugging perennial bearing very shiny, heart-shaped leaves and highly reflective bright yellow star-flowers that herald the end of winter.",
            "usages": "Useful as rapid early spring ground cover under heavily shaded hedges or deciduous trees.",
            "plantingTime": "Plant the small tuberous roots 'in the green' in late spring or as dormant bulbils in autumn."
        },
        {
            "name": "Wood Anemone",
            "scientificName": "Anemone nemorosa",
            "category": "Perennial",
            "height": "10 - 20 cm",
            "pollinators": [
                "Hoverflies"
            ],
            "benefits": "White star-like flowers. Indicates ancient woodland.",
            "plantingTip": "Plant slowly spreading rhizomes in autumn in leaf mould.",
            "colorClass": "bg-wildflower",
            "description": "A low, carpeting herbaceous perennial that spreads slowly using rhizomes. It throws up solitary, starry white flowers often delicately flushed with pink on their undersides.",
            "usages": "Perfect for naturalising under deciduous trees and shrubs where it catches early spring light before full canopy cover.",
            "plantingTime": "Best planted as dormant rhizomes in late summer or autumn, burying them gently in rich leaf mould."
        },
        {
            "name": "Ivy",
            "scientificName": "Hedera helix",
            "category": "Climber",
            "height": "Up to 20m",
            "pollinators": [
                "Late season bees",
                "Wasps",
                "Hoverflies"
            ],
            "benefits": "Crucial late autumn nectar source. Berries feed birds in late winter.",
            "plantingTip": "Can be invasive if unchecked. Mature climbing forms produce flowers.",
            "colorClass": "bg-shrub",
            "description": "An evergreen, woody climber clinging via aerial roots. Mature forms morph into bushy, non-climbing branches that produce spherical umbels of vital late-season yellowish green flowers.",
            "usages": "Critical late nectar resource for wasps and bees before winter. Provides irreplaceable dense, warm nesting shelter for birds.",
            "plantingTime": "Plant year-round, ideally in autumn or spring, checking vigorously if grown near structural brickwork."
        }
    ],
    "coastal_dappled": [
        {
            "name": "Viper's Bugloss",
            "scientificName": "Echium vulgare",
            "category": "Wildflower",
            "height": "30 - 90 cm",
            "pollinators": [
                "Red Mason Bees",
                "Garden Bumblebees",
                "Painted Lady Butterflies"
            ],
            "benefits": "A magnet for long-tongued insects. Bright blue funnel flower spikes. Uniquely high daily nectar production rate.",
            "plantingTip": "Enjoys dry, sandy, gravelly, or chalky soils. Self-seeding; press seed gently into the surface of the soil during autumn.",
            "colorClass": "bg-wildflower",
            "description": "A spectacular biennial wildflower forming impressive tall spikes laden with vivid blue, funnel-shaped blossoms from June to September. Its bristly, lance-shaped leaves provide a textured backdrop.",
            "usages": "Ideal for unstructured meadow plantings, dry gravel beds, or rocky coastal margins. Often used to create dynamic vertical elements in dry situations.",
            "plantingTime": "Sow seeds directly in late summer or early autumn for germination the following spring."
        },
        {
            "name": "Toadflax",
            "scientificName": "Linaria vulgaris",
            "category": "Perennial",
            "height": "30 - 60 cm",
            "pollinators": [
                "Bumblebees"
            ],
            "benefits": "Yellow snapdragon-like flowers with orange centres.",
            "plantingTip": "Spreads easily, good for waste ground or stony areas.",
            "colorClass": "bg-wildflower",
            "description": "An upright, branching perennial mimicking miniature yellow and orange snapdragons. It throws vertical spikes carrying these incredibly vibrant, small-scaled blooms densely.",
            "usages": "Highly beneficial for difficult areas facing steep dry conditions, like rough banks, gravel, or railway borders.",
            "plantingTime": "Sow direct thinly in spring once soils warm up fully."
        },
        {
            "name": "Dog Rose",
            "scientificName": "Rosa canina",
            "category": "Shrub",
            "height": "Up to 3m",
            "pollinators": [
                "Bees",
                "Birds (hips)"
            ],
            "benefits": "Large pale pink/white flowers followed by red hips.",
            "plantingTip": "Thorny scrambling shrub. Best for larger hedgerows.",
            "colorClass": "bg-shrub",
            "description": "A vigorous, scrambling deciduous shrub bearing thorny stems and scattered with wonderfully delicate, large single pink or white rose blooms, transforming into bright red hips.",
            "usages": "Essential for mixed native hedgerows. Provides nesting thickets for small birds and food sources extending late into winter.",
            "plantingTime": "Plant bare-root whips between November and March while fully dormant."
        },
        {
            "name": "Scottish Harebell",
            "scientificName": "Campanula rotundifolia",
            "category": "Perennial",
            "height": "15 - 40 cm",
            "pollinators": [
                "Small Bees"
            ],
            "benefits": "Delicate nodding blue bells. Extremely hardy.",
            "plantingTip": "Thrives in dry, poor soils, grass, or rocky areas.",
            "colorClass": "bg-wildflower",
            "description": "A delicate, wire-stemmed beauty. It possesses small, round basal leaves and bears a profusion of nodding, violet-blue bells that dance gracefully on the breeze.",
            "usages": "Suited for thin chalky swards, well-drained rockeries, drystone walls, and heathland restorations.",
            "plantingTime": "Sow seeds in autumn or spring on the surface of finely textured, poor, stony soil."
        },
        {
            "name": "Wild Teasel",
            "scientificName": "Dipsacus fullonum",
            "category": "Biennial",
            "height": "1 - 2 m",
            "pollinators": [
                "Goldfinches (seeds)",
                "Bees"
            ],
            "benefits": "Spiky heads trap water. Superb seed source for birds in winter.",
            "plantingTip": "Self-seeds readily. Leave standing through the winter.",
            "colorClass": "bg-wildflower",
            "description": "A tall, architectural biennial native with distinct thorny stems and large, cone-shaped spiky flower heads decorated with delicate lilac bands of bloom.",
            "usages": "A masterpiece for winter architecture in the garden. The seed heads provide a vital food source for overwintering finches.",
            "plantingTime": "Sow in spring or early summer directly into its final position, as its deep taproot dislikes being moved."
        },
        {
            "name": "Hemp Agrimony",
            "scientificName": "Eupatorium cannabinum",
            "category": "Perennial",
            "height": "1 - 1.5 m",
            "pollinators": [
                "Butterflies",
                "Hoverflies"
            ],
            "benefits": "Frothy pink flower heads. Absolutely loved by autumn butterflies.",
            "plantingTip": "Prefers damp soils. Excellent near ponds or damp ditches.",
            "colorClass": "bg-wildflower",
            "description": "A substantial, robust marginal perennial reaching stately heights, topped with large, frothy clusters of soft pink or pale purplish flowers in late summer.",
            "usages": "Unbeatable for damp, boggy conditions or the margins of large ponds. A vital late-season nectar station for migratory butterflies.",
            "plantingTime": "Plant divisions or young plants during autumn or spring into moisture-retentive soils."
        },
        {
            "name": "Wild Garlic",
            "scientificName": "Allium ursinum",
            "category": "Bulb",
            "height": "20 - 45 cm",
            "pollinators": [
                "Hoverflies",
                "Bees",
                "Beetles"
            ],
            "benefits": "White starry flowers with strong garlic scent. Edible.",
            "plantingTip": "Spreads vigorously in damp shade woodland conditions.",
            "colorClass": "bg-wildflower",
            "description": "An energetic bulbous perennial. Known for lush, wide green lance-like leaves emitting a potent garlic aroma, topped with spectacular, starry white flower umbels.",
            "usages": "Creates enchanting drifts in damp, shaded woodland margins. A highly renowned forager's favourite for spring pestos.",
            "plantingTime": "Plant bulbs 'in the green' in spring or dry bulbs in late autumn into damp, leafy soil."
        },
        {
            "name": "Field Scabious",
            "scientificName": "Knautia arvensis",
            "category": "Perennial",
            "height": "60 - 100 cm",
            "pollinators": [
                "Butterflies",
                "Bees"
            ],
            "benefits": "Pincushion-like lilac flowers.",
            "plantingTip": "Thrives in dry, chalky or sandy soils.",
            "colorClass": "bg-wildflower",
            "description": "A robust, tall, rough-stemmed perennial carrying numerous delicate, flat, pincushion-like lilac-blue flower heads over a long, generous late summer season.",
            "usages": "Very open and airy, making it superb for drifting through tall meadow grasses and loose herbaceous borders.",
            "plantingTime": "Sow seeds in spring or early autumn, or split mature fleshy roots during late winter."
        },
        {
            "name": "Wild Marjoram",
            "scientificName": "Origanum vulgare",
            "category": "Wildflower / Herb",
            "height": "20 - 50 cm",
            "pollinators": [
                "Common Blue Butterflies",
                "Gatekeeper Butterflies",
                "Honeybees",
                "Hoverflies"
            ],
            "benefits": "Aromatic pink flower heads. Supports a vast variety of butterflies and provides highly nutritious medicinal oils for visiting insects.",
            "plantingTip": "Thrives in dry, well-draining soils with alkaline pH. Trim back in late autumn after flowering to encourage fresh bushiness.",
            "colorClass": "bg-wildflower",
            "description": "A robust, bushy perennial herb with soft rounded leaves and clustered domed heads of tubular pinkish-purple flowers that act as a veritable feast for summer pollinators.",
            "usages": "Perfect for herb gardens, sunny borders, and gravel courtyards. The leaves can be used dried or fresh to season Mediterranean-style dishes.",
            "plantingTime": "Plant out small plugs in spring or sow seeds in well-draining soil from April to May."
        },
        {
            "name": "Cornflower",
            "scientificName": "Centaurea cyanus",
            "category": "Annual",
            "height": "30 - 80 cm",
            "pollinators": [
                "Bees",
                "Butterflies"
            ],
            "benefits": "Vivid blue flowers. Superb for summer meadows.",
            "plantingTip": "Sow in autumn or spring for quick colour.",
            "colorClass": "bg-wildflower",
            "description": "A slender, fast-growing hardy annual boasting vivid, incredibly pure azure-blue ruffled flower heads set atop fine, cottony, heavily branched stems.",
            "usages": "An iconic cornfield weed, excellent for gap-filling in new garden beds and absolutely stellar for cutting gardens.",
            "plantingTime": "Sow directly outside in either late summer (for larger, earlier plants next year) or early spring."
        }
    ]
};

// Application State
const STATE = {
    region: 'south',
    sunlight: 'full_sun',
    searchQuery: '',
    selectedPlant: null,
    currentPlants: [],
    nontoxicOnly: false
};

// DOM References
const regionSelect = document.getElementById('region');
const sunlightRadios = document.getElementsByName('sunlight');
const searchQueryInput = document.getElementById('searchQuery');
const nontoxicToggle = document.getElementById('nontoxicToggle');
const plantsGrid = document.getElementById('plantsGrid');
const emptyState = document.getElementById('emptyState');
const plantCountBadge = document.getElementById('plantCount');

// Modal Drawer References
const plantDrawer = document.getElementById('plantDrawer');
const closeDrawerBtn = document.getElementById('closeDrawer');
const drawerCategory = document.getElementById('drawerCategory');
const drawerName = document.getElementById('drawerName');
const drawerScientificName = document.getElementById('drawerScientificName');
const drawerHeight = document.getElementById('drawerHeight');
const drawerSunlight = document.getElementById('drawerSunlight');
const drawerPollinators = document.getElementById('drawerPollinators');
const drawerBenefits = document.getElementById('drawerBenefits');
const drawerTip = document.getElementById('drawerTip');

// Init application
document.addEventListener('DOMContentLoaded', () => {
    // Bind change listeners
    regionSelect.addEventListener('change', (e) => {
        STATE.region = e.target.value;
        renderSuggestions();
    });

    sunlightRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.checked) {
                STATE.sunlight = e.target.value;
                renderSuggestions();
            }
        });
    });

    searchQueryInput.addEventListener('input', (e) => {
        STATE.searchQuery = e.target.value.toLowerCase().trim();
        renderSuggestions();
    });

    nontoxicToggle.addEventListener('change', (e) => {
        STATE.nontoxicOnly = e.target.checked;
        renderSuggestions();
    });

    closeDrawerBtn.addEventListener('click', closePlantDrawer);
    plantDrawer.addEventListener('click', (e) => {
        if (e.target === plantDrawer) {
            closePlantDrawer();
        }
    });

    // --- App Preferences Implementation ---
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsMenu = document.getElementById('settingsMenu');
    const dyslexiaToggle = document.getElementById('dyslexiaToggle');
    const motionToggle = document.getElementById('motionToggle');
    const themeButtons = document.querySelectorAll('.theme-btn');

    // Toggle settings panel
    settingsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !settingsMenu.classList.contains('hidden');
        if (isOpen) {
            settingsMenu.classList.add('hidden');
            settingsBtn.setAttribute('aria-expanded', 'false');
        } else {
            settingsMenu.classList.remove('hidden');
            settingsBtn.setAttribute('aria-expanded', 'true');
        }
    });

    // Close settings when clicking outside
    document.addEventListener('click', (e) => {
        if (!settingsMenu.classList.contains('hidden') && !e.target.closest('.settings-container')) {
            settingsMenu.classList.add('hidden');
            settingsBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Theme Picker Function
    function applyTheme(themeName) {
        document.body.classList.remove('theme-light', 'theme-night', 'dark');
        themeButtons.forEach(btn => {
            if (btn.getAttribute('data-theme') === themeName) {
                btn.classList.add('active');
                btn.setAttribute('aria-checked', 'true');
            } else {
                btn.classList.remove('active');
                btn.setAttribute('aria-checked', 'false');
            }
        });

        if (themeName === 'light') {
            document.body.classList.add('theme-light');
        } else if (themeName === 'night') {
            document.body.classList.add('theme-night');
            document.body.classList.add('dark');
        } else if (themeName === 'dark') {
            document.body.classList.add('dark');
        }
        localStorage.setItem('greenmeans-tab-theme', themeName);
    }

    // Set theme handlers
    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedTheme = btn.getAttribute('data-theme');
            applyTheme(selectedTheme);
        });
    });

    // Dyslexia Toggle Handler
    dyslexiaToggle.addEventListener('change', (e) => {
        const isEnabled = e.target.checked;
        if (isEnabled) {
            document.body.classList.add('font-dyslexic');
        } else {
            document.body.classList.remove('font-dyslexic');
        }
        localStorage.setItem('greenmeans-tab-dyslexic', isEnabled);
    });

    // Reduced Motion Handler
    motionToggle.addEventListener('change', (e) => {
        const isEnabled = e.target.checked;
        if (isEnabled) {
            document.body.classList.add('reduced-motion');
        } else {
            document.body.classList.remove('reduced-motion');
        }
        localStorage.setItem('greenmeans-tab-motion', isEnabled);
    });

    // Restore saved preferences
    const savedTheme = localStorage.getItem('greenmeans-tab-theme') || 'dark';
    applyTheme(savedTheme);

    const savedDyslexic = localStorage.getItem('greenmeans-tab-dyslexic') === 'true';
    dyslexiaToggle.checked = savedDyslexic;
    if (savedDyslexic) {
        document.body.classList.add('font-dyslexic');
    }

    const savedMotion = localStorage.getItem('greenmeans-tab-motion') === 'true';
    motionToggle.checked = savedMotion;
    if (savedMotion) {
        document.body.classList.add('reduced-motion');
    }

    // Run first render
    renderSuggestions();
    
    // Register ESC claw to dismiss drawer and settings menu
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (!plantDrawer.classList.contains('hidden')) {
                closePlantDrawer();
            }
            if (!settingsMenu.classList.contains('hidden')) {
                settingsMenu.classList.add('hidden');
                settingsBtn.setAttribute('aria-expanded', 'false');
            }
        }
    });
});

const ALL_REGION_NATIVE_PLANTS = [
    {
        "name": "Bell Heather",
        "scientificName": "Erica cinerea",
        "category": "Shrub",
        "height": "15 - 60 cm",
        "pollinators": ["Bumblebees", "Honeybees", "Moths"],
        "benefits": "Provides dense nectar in mid to late summer for bees.",
        "plantingTip": "Needs very well-drained, acidic soil in full sun.",
        "colorClass": "bg-tree",
        "description": "A very attractive native shrub characteristic of dry heathlands. It offers deep purple, bell-shaped flowers in dense clusters along its wiry stems.",
        "usages": "Great for dry heather gardens, acidic banks, and heathland regeneration.",
        "plantingTime": "Plant in spring or autumn."
    },
    {
        "name": "Cross-leaved Heath",
        "scientificName": "Erica tetralix",
        "category": "Shrub",
        "height": "15 - 50 cm",
        "pollinators": ["Bumblebees", "Moths"],
        "benefits": "Provides valuable late-season nectar in wet, boggy environments.",
        "plantingTip": "Requires permanently moist or wet, acidic peaty soil.",
        "colorClass": "bg-tree",
        "description": "Distinctive for its greyish-green leaves arranged in whorls of four (cross-like). The flowers are soft pale pink to rose, drooping in compact terminal umbels.",
        "usages": "Ideal for bog gardens, pond margins on acid soils, and wet heathlands.",
        "plantingTime": "Plant in spring or early autumn."
    },
    {
        "name": "Common Rock-rose",
        "scientificName": "Helianthemum nummularium",
        "category": "Shrub",
        "height": "10 - 30 cm",
        "pollinators": ["Bees", "Hoverflies"],
        "benefits": "Bright yellow flowers over a very long period; excellent ground cover.",
        "plantingTip": "Thrives on thin, chalk or limestone soils in direct sunlight.",
        "colorClass": "bg-tree",
        "description": "A low-growing, spreading evergreen shrublet. It produces an abundance of saucer-shaped, bright yellow flowers with crumpled petals that follow the sun.",
        "usages": "Perfect for rockeries, scree gardens, and chalk banks.",
        "plantingTime": "Plant out in spring or autumn."
    },
    {
        "name": "Wild Pansy",
        "scientificName": "Viola tricolor",
        "category": "Annual",
        "height": "10 - 20 cm",
        "pollinators": ["Bees", "Butterflies"],
        "benefits": "Known as Heartsease, producing charming tricoloured blooms over a long season.",
        "plantingTip": "Easily self-seeds in bare or disturbed ground.",
        "colorClass": "bg-wildflower",
        "description": "The delicate, charming ancestor of cultivated pansies. The blooms are a variable mix of purple, yellow, and white, with dark nectar guides.",
        "usages": "Ideal for edges, gaps in paving, and cottage gardens.",
        "plantingTime": "Sow directly in spring or late summer."
    },
    {
        "name": "Meadow Saxifrage",
        "scientificName": "Saxifraga granulata",
        "category": "Perennial",
        "height": "15 - 30 cm",
        "pollinators": ["Flies", "Beetles", "Small Bees"],
        "benefits": "Delicate white blooms for spring meadows; adaptable to damp soils.",
        "plantingTip": "Grows from small bulbils; protect from aggressive spreading grasses.",
        "colorClass": "bg-wildflower",
        "description": "A beautiful early meadow plant. It develops small kidney-shaped basal leaves and sends up delicate, slightly hairy stems topped with relatively large, pure white, starry flowers.",
        "usages": "Damp meadows, riverbanks, and lightly shaded rockeries.",
        "plantingTime": "Plant bulbils in late summer or autumn."
    },
    {
        "name": "Salad Burnet",
        "scientificName": "Poterium sanguisorba",
        "category": "Perennial",
        "height": "20 - 40 cm",
        "pollinators": ["Bees", "Butterflies"],
        "benefits": "Edible cucumber-flavored leaves and unusual red spherical flower heads.",
        "plantingTip": "Needs well-drained, alkaline (chalky) soil in full sun.",
        "colorClass": "bg-wildflower",
        "description": "A highly attractive, refined plant with pinnate rosettes of foliage that taste of cucumber. Its flowers form tight, rounded, reddish-green globes on tall wiry stems.",
        "usages": "Herb gardens, chalk downland meadows, and dry borders.",
        "plantingTime": "Sow seeds or plant out in spring."
    },
    {
        "name": "Wild Mignonette",
        "scientificName": "Reseda lutea",
        "category": "Biennial",
        "height": "30 - 70 cm",
        "pollinators": ["Bees", "Butterflies", "Hoverflies"],
        "benefits": "Produces densely packed spikes of tiny, fragrant pale yellow flowers.",
        "plantingTip": "Thrives on disturbed, poor, and chalky soil.",
        "colorClass": "bg-wildflower",
        "description": "A bushy plant with deeply lobed leaves. It sends up long spikes loaded with pale yellowy-green flowers that provide excellent forage for a host of insects.",
        "usages": "Dry borders, sunny banks, and stony or gravelly areas.",
        "plantingTime": "Sow directly in spring or autumn."
    },
    {
        "name": "Weld",
        "scientificName": "Reseda luteola",
        "category": "Biennial",
        "height": "50 - 150 cm",
        "pollinators": ["Bees", "Hoverflies"],
        "benefits": "An ancient dye plant providing tall, striking architectural spires.",
        "plantingTip": "Requires disturbed ground to establish; prefers alkaline soil.",
        "colorClass": "bg-wildflower",
        "description": "Also known as Dyer's Rocket. A tall, upright biennial that forms a sturdy rosette in its first year, followed by very tall, thin, curving spires of minute yellow flowers.",
        "usages": "Fantastic structural element in dry beds and historical dye gardens.",
        "plantingTime": "Sow in spring or late summer."
    },
    {
        "name": "Wild Basil",
        "scientificName": "Clinopodium vulgare",
        "category": "Perennial",
        "height": "30 - 60 cm",
        "pollinators": ["Bees", "Butterflies"],
        "benefits": "Aromatic foliage and dense whorls of pink flowers beloved by insects.",
        "plantingTip": "Thrives on well-drained calcareous (chalky) soils in full sun or part shade.",
        "colorClass": "bg-wildflower",
        "description": "A hairy, aromatic herb of the mint family. It forms neat, spreading clumps and produces fuzzy, intensely pink-purple flowers arranged in dense whorls along the stems.",
        "usages": "Excellent for herb gardens, sunny borders, and chalk meadows.",
        "plantingTime": "Plant out in spring or autumn."
    },
    {
        "name": "Hound's-tongue",
        "scientificName": "Cynoglossum officinale",
        "category": "Biennial",
        "height": "30 - 80 cm",
        "pollinators": ["Bees", "Butterflies"],
        "benefits": "Unusual maroon-purple flowers, attractive to pollinators, smelling strangely of mice.",
        "plantingTip": "Needs dry, well-drained soil; frequently found on sand dunes and chalk.",
        "colorClass": "bg-wildflower",
        "description": "A downy, soft-leaved biennial. Its dull reddish-purple flowers give way to distinctive barbed nutlets that stick heavily to animal fur to disperse.",
        "usages": "Dry banks, coastal gardens, and wild corners.",
        "plantingTime": "Sow in spring or autumn."
    },
    {
        "name": "Wild Clary",
        "scientificName": "Salvia verbenaca",
        "category": "Perennial",
        "height": "30 - 80 cm",
        "pollinators": ["Bees", "Butterflies"],
        "benefits": "Aromatic sage-like leaves and tall spikes of violet-blue flowers.",
        "plantingTip": "Needs very well-drained, dry soil in full sun.",
        "colorClass": "bg-wildflower",
        "description": "A native sage with wrinkled, aromatic leaves forming a basal rosette. In summer, it sends up spikes of small but vivid violet-blue, hooded flowers.",
        "usages": "Excellent for gravel gardens, dry borders, and coastal planting.",
        "plantingTime": "Sow in autumn or spring."
    },
    {
        "name": "Sea Thrift",
        "scientificName": "Armeria maritima",
        "category": "Perennial",
        "height": "15 - 30 cm",
        "pollinators": ["Small Bees", "Flies", "Butterflies"],
        "benefits": "Extremely wind and salt tolerant. Dense pink pom-pom flowers.",
        "plantingTip": "Perfect for coastal gardens, rockeries, or green roofs.",
        "colorClass": "bg-wildflower",
        "description": "Forms dense, evergreen cushions of grass-like foliage. In late spring and summer, stiff, wiry stems rise bearing spherical clusters of bright pink (or sometimes white) papery flowers.",
        "usages": "Rockeries, coastal banks, and edging paths.",
        "plantingTime": "Plant out in spring or early autumn."
    },
    {
        "name": "Wood Avens",
        "scientificName": "Geum urbanum",
        "category": "Perennial",
        "height": "30 - 60 cm",
        "pollinators": ["Small Hoverflies"],
        "benefits": "Tolerates deep shade and poor soils.",
        "plantingTip": "Spreads very readily by burr-like seeds, so position where it has room to roam.",
        "colorClass": "bg-wildflower",
        "description": "Also known as Herb Bennet. It is a subtle woodland edge plant with lobed leaves and small, five-petalled yellow flowers followed by spiky, reddish seed heads that catch on animal fur.",
        "usages": "Naturalising in rough, shady corners or under hedges.",
        "plantingTime": "Plant in spring or autumn."
    },
    {
        "name": "Eyebright",
        "scientificName": "Euphrasia officinalis",
        "category": "Annual",
        "height": "5 - 20 cm",
        "pollinators": ["Small Bees"],
        "benefits": "Semi-parasitic on grasses, helping to keep meadow grass vigor in check.",
        "plantingTip": "Must be sown into established short grass, as it relies on grass roots to thrive.",
        "colorClass": "bg-wildflower",
        "description": "A tiny, beautiful semi-parasitic meadow plant. It produces highly detailed, small white flowers streaked with purple lines and a central yellow spot, thought historically to resemble an eye.",
        "usages": "Essential for creating species-rich fine grass lawns and meadows.",
        "plantingTime": "Sow directly into grass in autumn."
    },
    {
        "name": "Yellow Archangel",
        "scientificName": "Lamium galeobdolon",
        "category": "Perennial",
        "height": "30 - 60 cm",
        "pollinators": ["Bumblebees"],
        "benefits": "Thrives in dry, deep shade where little else will grow.",
        "plantingTip": "Very vigorous spreader. Ensure you plant the native, non-variegated form to avoid invasiveness.",
        "colorClass": "bg-wildflower",
        "description": "A woodland dead-nettle that spreads vigorously by runners. It has nettle-like leaves lacking a sting and produces whorls of pale yellow, hooded flowers in late spring.",
        "usages": "Groundcover under dense deciduous canopies or mature hedgerows.",
        "plantingTime": "Plant out from autumn to spring."
    },
    {
        "name": "Herb Paris",
        "scientificName": "Paris quadrifolia",
        "category": "Perennial",
        "height": "20 - 40 cm",
        "pollinators": ["Flies", "Beetles"],
        "benefits": "A striking, rare ancient woodland indicator species.",
        "plantingTip": "Requires undisturbed, moist, chalky or limestone woodland soil.",
        "colorClass": "bg-wildflower",
        "description": "A bizarre and beautiful woodland perennial. It produces a single whorl of four large leaves, from the center of which rises a highly unusual green and yellow starry flower, later forming a single toxic black berry.",
        "usages": "Shaded, established woodland gardens with alkaline soil.",
        "plantingTime": "Plant rhizomes in autumn."
    },
    {
        "name": "Lily of the Valley",
        "scientificName": "Convallaria majalis",
        "category": "Perennial",
        "height": "15 - 30 cm",
        "pollinators": ["Bees"],
        "benefits": "Incredibly strong, sweet fragrance from elegant nodding white bells.",
        "plantingTip": "Spreads vigorously via underground rhizomes in right conditions.",
        "colorClass": "bg-wildflower",
        "description": "A famous woodland native forming carpets of large, paired elliptical green leaves. In spring, arching stems carry a sequence of pure white, delightfully scented bell-shaped flowers.",
        "usages": "Scented groundcover for deeply shaded, moist borders or woodland edge.",
        "plantingTime": "Plant crowns in late autumn or early spring."
    },
    {
        "name": "St John's Wort",
        "scientificName": "Hypericum perforatum",
        "category": "Perennial",
        "height": "30 - 90 cm",
        "pollinators": ["Bees", "Hoverflies"],
        "benefits": "Abundant bright yellow flowers with prominent stamens in mid-summer.",
        "plantingTip": "Very adaptable, but prefers dry, sunny spots.",
        "colorClass": "bg-wildflower",
        "description": "A well-known medicinal plant. The oval leaves, when held to the light, show translucent 'perforated' oil glands. It bursts into vivid yellow, star-like flowers that bleed a red oil when crushed.",
        "usages": "Sunny banks, herbal borders, and rough grasslands.",
        "plantingTime": "Sow seeds or plant out in spring."
    },
    {
        "name": "Lords-and-Ladies",
        "scientificName": "Arum maculatum",
        "category": "Perennial / Bulb",
        "height": "20 - 40 cm",
        "pollinators": ["Small Flies", "Midges"],
        "benefits": "Fascinating specialized pollination mechanism. Bright red autumn berries.",
        "plantingTip": "Thrives in deep, damp woodland shade.",
        "colorClass": "bg-wildflower",
        "description": "An extraordinary native. Arrow-shaped, often black-spotted leaves appear in early spring. The flower is a pale green hood (spathe) enclosing a dark purplish column (spadix) which emits heat and scent to trap flies. Later, it leaves a striking spike of poisonous bright orange-red berries.",
        "usages": "Wild shaded corners and ancient woodland recreations.",
        "plantingTime": "Plant tubers in autumn."
    },
    {
        "name": "Coltsfoot",
        "scientificName": "Tussilago farfara",
        "category": "Perennial",
        "height": "10 - 20 cm",
        "pollinators": ["Early Bees", "Flies"],
        "benefits": "One of the very first sources of nectar in early spring.",
        "plantingTip": "Extremely vigorous and invasive; do not plant in a small or neat garden.",
        "colorClass": "bg-wildflower",
        "description": "Unusual in that its bright yellow, dandelion-like flowers appear on scaly stems very early in spring long before the hoof-shaped, felted green leaves emerge.",
        "usages": "Reclaiming very rough, disturbed wasteland or steep clay banks.",
        "plantingTime": "Plant root fragments in winter or spring."
    },
    {
        "name": "Borage",
        "scientificName": "Borago officinalis",
        "category": "Annual",
        "height": "60 - 80 cm",
        "pollinators": ["Honeybees", "Bumblebees"],
        "benefits": "Incredibly high nectar replenishment rate. Starry blue flowers.",
        "plantingTip": "Self-seeds readily. Prefers sunny positions in well-drained soil.",
        "colorClass": "bg-wildflower",
        "description": "A bristly annual with striking, star-shaped, clear blue flowers. It is one of the most prolific nectar providers, constantly replenishing its stores to attract continuous waves of bees.",
        "usages": "Herb gardens, pollinator patches, and borders. Flowers are edible and often used to garnish summer drinks.",
        "plantingTime": "Sow directly in spring."
    },
    {
        "name": "Meadow Vetchling",
        "scientificName": "Lathyrus pratensis",
        "category": "Perennial",
        "height": "30 - 100 cm",
        "pollinators": ["Bumblebees", "Butterflies"],
        "benefits": "Provides valuable nitrogen to the soil. Brilliant yellow pea-like flowers.",
        "plantingTip": "Rambles through rough grasses. Needs other stronger plants for support.",
        "colorClass": "bg-wildflower",
        "description": "A scrambling, climbing perennial of the pea family. It uses tendrils to hoist itself up among meadow grasses, displaying clusters of bright yellow flowers.",
        "usages": "Excellent for long-grass meadows, rough banks, and hedgerow bases.",
        "plantingTime": "Sow directly or plant out in spring."
    },
    {
        "name": "Tufted Vetch",
        "scientificName": "Vicia cracca",
        "category": "Perennial",
        "height": "1 - 2 m",
        "pollinators": ["Bumblebees"],
        "benefits": "Another superb nitrogen fixer with striking, dense spikes of purple-blue flowers.",
        "plantingTip": "Grows vigorously through hedgerows or tall meadow grass.",
        "colorClass": "bg-wildflower",
        "description": "A vigorous climbing perennial that scrambles through hedges and tall vegetation using tendrils. It produces dense, one-sided racemes of vivid violet-blue flowers.",
        "usages": "Ideal for enriching boundary hedges and wilder structural habitats.",
        "plantingTime": "Sow directly or plant out in spring or autumn."
    },
    {
        "name": "White Clover",
        "scientificName": "Trifolium repens",
        "category": "Perennial",
        "height": "10 - 20 cm",
        "pollinators": ["Honeybees", "Bumblebees"],
        "benefits": "Mainstay nectar source. Fixes nitrogen and remains green even in drought.",
        "plantingTip": "Can outcompete finer grasses, but is essential for an eco-lawn.",
        "colorClass": "bg-wildflower",
        "description": "A low, creeping perennial bearing familiar trifoliate leaves and globes of white or faintly pinkish fragrant flowers. Vital for sustaining bee populations mid-summer.",
        "usages": "The backbone of any wildlife-friendly lawn, orchards, and grazing pastures.",
        "plantingTime": "Sow in spring or late summer."
    },
    {
        "name": "Spindle",
        "scientificName": "Euonymus europaeus",
        "category": "Shrub",
        "height": "Up to 4m",
        "pollinators": ["Small Flies", "Birds (Berries)"],
        "benefits": "Incredible autumn leaf colour and highly unusual, vibrant pink and orange fruit capsules.",
        "plantingTip": "Tolerates most soils, including heavy clay and chalk.",
        "colorClass": "bg-tree",
        "description": "A deciduous shrub that goes relatively unnoticed until autumn, when its foliage turns brilliant crimson. It then reveals shocking-pink lobed fruits that split to expose bright orange seeds.",
        "usages": "Native hedgerows, woodland edges, and architectural winter interest.",
        "plantingTime": "Plant out from autumn to early spring."
    },
    {
        "name": "Broom",
        "scientificName": "Cytisus scoparius",
        "category": "Shrub",
        "height": "1 - 2 m",
        "pollinators": ["Bumblebees", "Solitary Bees"],
        "benefits": "Explosive pollen-release mechanism triggered by large bees.",
        "plantingTip": "Needs full sun and well-drained, lime-free (acidic) sandy or rocky soil.",
        "colorClass": "bg-tree",
        "description": "A tough, wiry deciduous shrub with rigid green stems. It is entirely smothered in large, intensely bright yellow, vanilla-scented pea-like flowers in late spring.",
        "usages": "Perfect for dry banks, heathland edges, and poor coastal soils.",
        "plantingTime": "Plant in spring or autumn."
    },
    {
        "name": "Dogwood",
        "scientificName": "Cornus sanguinea",
        "category": "Shrub",
        "height": "Up to 3m",
        "pollinators": ["Hoverflies", "Bees", "Birds (Berries)"],
        "benefits": "Brilliant crimson winter stems. Dense clusters of white flowers followed by black berries.",
        "plantingTip": "Can be coppiced (cut hard back) in late winter to encourage vivid young red stems.",
        "colorClass": "bg-tree",
        "description": "A vigorous upright native shrub. While its white summer flowers and dark autumn berries are attractive to wildlife, it is most prized for its naked, blood-red twigs gleaming in winter sun.",
        "usages": "Crucial for winter garden structure, moist margins, and mixed hedges.",
        "plantingTime": "Plant bare-root or potted in autumn to spring."
    },
    {
        "name": "Wayfaring Tree",
        "scientificName": "Viburnum lantana",
        "category": "Shrub",
        "height": "Up to 4m",
        "pollinators": ["Hoverflies", "Birds (Berries)"],
        "benefits": "Large domed heads of creamy flowers. Striking fruit that turns from red to black.",
        "plantingTip": "Thrives exceptionally well on shallow chalky or limestone soils.",
        "colorClass": "bg-tree",
        "description": "A substantial deciduous shrub with thick, downy, heavily veined leaves. Its flat umbels of creamy-white flowers transition into berries that are a mix of vibrant red and glossy black simultaneously.",
        "usages": "Excellent for chalk scrubland, exposed dry hillsides, and large hedgerows.",
        "plantingTime": "Plant in autumn through early spring."
    },
    {
        "name": "Elder",
        "scientificName": "Sambucus nigra",
        "category": "Shrub / Tree",
        "height": "Up to 6m",
        "pollinators": ["Hoverflies", "Beetles", "Birds (Berries)"],
        "benefits": "Provides highly scented flowers and deeply pigmented berries, both used for forage.",
        "plantingTip": "Very fast growing and tolerant of almost any condition. Can be cut back hard.",
        "colorClass": "bg-tree",
        "description": "A ubiquitous and fast-growing woody plant. It produces massive, flat plates of tiny, intensely fragrant creamy-white flowers in early summer, followed by drooping bunches of dark purple-black berries.",
        "usages": "Pioneer species for woodland edges, hedgerows, and foraging gardens (cordials and wines).",
        "plantingTime": "Plant almost anytime."
    },
    {
        "name": "Hazel",
        "scientificName": "Corylus avellana",
        "category": "Tree",
        "height": "Up to 6m",
        "pollinators": ["Wind Pollinated", "Bees (Early Pollen Collection)"],
        "benefits": "Produces early male catkins ('lambs' tails') providing crucial early pollen. Produces edible nuts.",
        "plantingTip": "Responds wonderfully to traditional coppicing to prolong lifespan and manage size.",
        "colorClass": "bg-tree",
        "description": "A highly valued understory tree with rounded, softly hairy leaves. Famous for its dangling yellow catkins in mid-winter before and native hazelnuts in autumn, supporting dormice and squirrels.",
        "usages": "Traditional woodland coppice, dense structural hedging, and nut orchards.",
        "plantingTime": "Plant out bare-root in winter."
    },
    {
        "name": "Field Poppy",
        "scientificName": "Papaver rhoeas",
        "category": "Annual",
        "height": "30 - 60 cm",
        "pollinators": ["Bees", "Hoverflies"],
        "benefits": "Provides abundant pollen for bees in mid-summer.",
        "plantingTip": "Needs disturbed, bare soil to germinate. Often sown as part of an annual cornfield mix.",
        "colorClass": "bg-wildflower",
        "description": "An iconic agricultural weed with brilliant, papery scarlet petals often marked with a dark basal spot. It has historically symbolized remembrance.",
        "usages": "Excellent for annual meadow schemes and restoring agricultural land edges.",
        "plantingTime": "Sow directly in autumn or spring."
    },
    {
        "name": "Corncockle",
        "scientificName": "Agrostemma githago",
        "category": "Annual",
        "height": "60 - 90 cm",
        "pollinators": ["Butterflies", "Bees"],
        "benefits": "Striking magenta flowers. Highly attractive to a range of pollinators.",
        "plantingTip": "Sow in open ground. Very easy to grow from seed but requires open bare soil.",
        "colorClass": "bg-wildflower",
        "description": "A tall, elegant annual with pale green, hairy leaves and large, deeply veined magenta to pink flowers. Once a common arable weed, now rarer in the wild.",
        "usages": "Essential for cornfield annual mixes and adding quick colour to new beds.",
        "plantingTime": "Sow directly in autumn or spring."
    },
    {
        "name": "Common Heather",
        "scientificName": "Calluna vulgaris",
        "category": "Shrub",
        "height": "20 - 50 cm",
        "pollinators": ["Bumblebees", "Moths", "Honeybees"],
        "benefits": "Provides late-summer nectar on mass.",
        "plantingTip": "Demands acidic, well-draining soil. Will not survive in chalky conditions.",
        "colorClass": "bg-tree",
        "description": "A low-growing evergreen shrub that carpets moorlands and heaths. It produces tiny, bell-shaped purplish-pink flowers along its stems in late summer.",
        "usages": "Perfect for acid beds, rockeries, or creating a mini-heathland habitat.",
        "plantingTime": "Plant out in autumn or spring."
    },
    {
        "name": "Honeysuckle",
        "scientificName": "Lonicera periclymenum",
        "category": "Climber",
        "height": "Up to 6m",
        "pollinators": ["Moths", "Long-tongued Bees", "Birds (Berries)"],
        "benefits": "Intensely fragrant flowers, especially at night, attracting night-flying moths.",
        "plantingTip": "Prefers its roots in the shade (damp soil) and its canopy in the sun.",
        "colorClass": "bg-tree",
        "description": "A vigorous woody climber with highly perfumed, tubular, creamy-white flowers that turn deeper yellow and pink as they age. Followed by clusters of red berries.",
        "usages": "Essential for scrambling through native hedgerows or over pergolas and fences.",
        "plantingTime": "Plant in autumn or spring."
    },
    {
        "name": "Wood Forget-me-not",
        "scientificName": "Myosotis sylvatica",
        "category": "Biennial",
        "height": "15 - 30 cm",
        "pollinators": ["Small Bees", "Hoverflies"],
        "benefits": "Early spring pollen source forming dense carpets of blue.",
        "plantingTip": "Self-seeds very freely in dappled shade or woodland edges.",
        "colorClass": "bg-wildflower",
        "description": "A hairy, carpeting plant that produces sprays of tiny, brilliant azure blue flowers with yellow and white centres, providing a wonderful soft hue in early spring.",
        "usages": "Ideal for woodland gardens, underplanting spring bulbs, or shady borders.",
        "plantingTime": "Sow outdoors in early summer for flowers the following spring."
    },
    {
        "name": "Pasqueflower",
        "scientificName": "Pulsatilla vulgaris",
        "category": "Perennial",
        "height": "15 - 30 cm",
        "pollinators": ["Bees"],
        "benefits": "Stunning early purple flowers set against intensely silky, furry foliage.",
        "plantingTip": "Requires very sharp drainage and alkaline (chalky) soil in full sun.",
        "colorClass": "bg-wildflower",
        "description": "A rare native beauty. It features finely dissected, silky-haired leaves and spectacular, large, bell-shaped purple flowers with a boss of bright golden stamens, followed by fluffy seed-heads.",
        "usages": "Perfect for gravel gardens, scree beds, or chalk downland recreation.",
        "plantingTime": "Plant out in spring."
    },
    {
        "name": "Globeflower",
        "scientificName": "Trollius europaeus",
        "category": "Perennial",
        "height": "40 - 60 cm",
        "pollinators": ["Flies", "Beetles", "Bees"],
        "benefits": "Vivid spherical yellow blooms in late spring and early summer.",
        "plantingTip": "Needs reliably moist, heavy soil. Native to damp meadows.",
        "colorClass": "bg-wildflower",
        "description": "A clump-forming perennial which delights with beautiful, incurved, pale lemon-yellow petals forming a closed globe that protects the pollen from rain.",
        "usages": "Superb for bog gardens, pond margins, and damp meadow plantings.",
        "plantingTime": "Plant in spring or autumn."
    },
    {
        "name": "Lady's Mantle",
        "scientificName": "Alchemilla vulgaris",
        "category": "Perennial",
        "height": "30 - 50 cm",
        "pollinators": ["Hoverflies", "Small Bees"],
        "benefits": "Excellent structural edging plant; leaves capture water droplets beautifully.",
        "plantingTip": "Very adaptable but prefers moist, well-drained soil. Self-seeds enthusiastically.",
        "colorClass": "bg-wildflower",
        "description": "A charming, robust perennial featuring heavily pleated, fan-shaped leaves that excel at catching morning dew. In summer, it produces airy sprays of tiny, frothy chartreuse-green/yellow flowers.",
        "usages": "Ideal for softening border edges, path framing, and cottage garden styles.",
        "plantingTime": "Plant from spring to autumn."
    },
    {
        "name": "Goat's-beard",
        "scientificName": "Tragopogon pratensis",
        "category": "Biennial",
        "height": "30 - 70 cm",
        "pollinators": ["Bees", "Hoverflies"],
        "benefits": "Bright yellow daisy-like flowers that predictably close at midday.",
        "plantingTip": "Thrives in sunny meadows and disturbed ground. Has a deep taproot.",
        "colorClass": "bg-wildflower",
        "description": "Often called 'Jack-go-to-bed-at-noon', this grassy-leaved meadow plant has yellow star-like flower heads that only open in morning sun, succeeded by large, delicate, dandelion-like seed clocks.",
        "usages": "Valuable addition to sunny, informal wildflower meadows.",
        "plantingTime": "Sow directly in spring or autumn."
    },
    {
        "name": "Sanicle",
        "scientificName": "Sanicula europaea",
        "category": "Perennial",
        "height": "20 - 50 cm",
        "pollinators": ["Flies", "Small Beetles"],
        "benefits": "Beautiful, glossy, deeply lobed leaves ideal for deep shade.",
        "plantingTip": "Requires moisture-retentive, shady conditions like a woodland floor.",
        "colorClass": "bg-wildflower",
        "description": "A woodland umbellifer that spreads by rhizomes. It produces highly glossy, deeply palmate leaves and delicate, pale pinkish-white, button-like flower clusters on wiry stems.",
        "usages": "Excellent shade-tolerant groundcover under dense deciduous tree canopies.",
        "plantingTime": "Plant out in autumn or spring."
    },
    {
        "name": "Water Mint",
        "scientificName": "Mentha aquatica",
        "category": "Perennial",
        "height": "20 - 90 cm",
        "pollinators": ["Bees", "Butterflies", "Hoverflies"],
        "benefits": "Highly aromatic foliage, magnificent late-summer nectar producer.",
        "plantingTip": "Vigorous marginal plant. Best contained in a basket if grown in a small pond.",
        "colorClass": "bg-wildflower",
        "description": "A classic wetland perennial with creeping runners and strongly mint-scented rounded leaves. In late summer, rings of lilac-pink flowers appear in dense clusters at the stem tips.",
        "usages": "Excellent for wildlife ponds, bog gardens, and stream edges.",
        "plantingTime": "Plant from spring to early autumn."
    },
    {
        "name": "Snake's-head Fritillary",
        "scientificName": "Fritillaria meleagris",
        "category": "Bulb",
        "height": "20 - 40 cm",
        "pollinators": ["Bumblebees"],
        "benefits": "Stunningly unique checkerboard patterned bell flowers.",
        "plantingTip": "Thrives in reliably moist soils and traditional damp meadows.",
        "colorClass": "bg-wildflower",
        "description": "An unmistakable and iconic spring-flowering bulb featuring nodding, bell-shaped flowers delicately patterned with a maroon and pink checkerboard (or occasionally pure white).",
        "usages": "Unbeatable for naturalising in damp grass, wet meadows, or beside ponds.",
        "plantingTime": "Plant bulbs in autumn."
    },
    {
        "name": "Sweet Woodruff",
        "scientificName": "Galium odoratum",
        "category": "Perennial",
        "height": "15 - 30 cm",
        "pollinators": ["Small Hoverflies"],
        "benefits": "Brilliant groundcover for dry shade with sweet, hay-like scent when dried.",
        "plantingTip": "Can form a dense carpet under trees where little else will grow.",
        "colorClass": "bg-wildflower",
        "description": "A creeping woodland perennial with whorls of bright green, lance-shaped leaves and terminal clusters of tiny, star-shaped, pure white flowers in late spring.",
        "usages": "Ideal for dry shade groundcover, underplanting deciduous shrubs and trees.",
        "plantingTime": "Plant out from spring to early autumn."
    },
    {
        "name": "Wild Columbine",
        "scientificName": "Aquilegia vulgaris",
        "category": "Perennial",
        "height": "60 - 90 cm",
        "pollinators": ["Bumblebees"],
        "benefits": "Unique, nodding, spurred blue/purple flowers. Will self-seed in shaded spots.",
        "plantingTip": "Cross-pollinates easily, so colours may vary in self-seeded generations.",
        "colorClass": "bg-wildflower",
        "description": "A charming, upright perennial bearing beautiful bluish-green, deeply divided leaves and distinctive, nodding, spurred, violet-blue flowers that resemble a flock of doves.",
        "usages": "Cottage gardens, woodland edges, and dappled shade borders.",
        "plantingTime": "Sow seeds or plant out in spring or autumn."
    },
    {
        "name": "Tansy",
        "scientificName": "Tanacetum vulgare",
        "category": "Perennial",
        "height": "60 - 120 cm",
        "pollinators": ["Hoverflies", "Butterflies", "Beetles"],
        "benefits": "Aromatic, fern-like foliage and striking, flat-topped clusters of button-like yellow flowers.",
        "plantingTip": "Vigorous, can be invasive in small spaces, so plant where space allows or contain it.",
        "colorClass": "bg-wildflower",
        "description": "A robust, upright perennial. Its deeply divided, fern-like dark green leaves possess a strong, camphorous scent. It produces dense corymbs of bright yellow 'button' flower heads.",
        "usages": "Excellent for hot, dry borders and naturalistic meadow schemes.",
        "plantingTime": "Plant from spring to autumn."
    },
    {
        "name": "Agrimony",
        "scientificName": "Agrimonia eupatoria",
        "category": "Perennial",
        "height": "40 - 60 cm",
        "pollinators": ["Hoverflies", "Bees"],
        "benefits": "Slender spikes of golden-yellow star-like flowers above pinnate leaves.",
        "plantingTip": "Prefers well-drained, alkaline or neutral soils.",
        "colorClass": "bg-wildflower",
        "description": "A delightful native herb with a mildly spicy fragrance. It puts up slender, unbranched spires dotted with bright yellow, star-shaped flowers that bloom from the bottom up.",
        "usages": "Great for dry grassy areas, hedge borders, and woodland margins.",
        "plantingTime": "Sow seed or plant out in spring."
    },
    {
        "name": "Musk Mallow",
        "scientificName": "Malva moschata",
        "category": "Perennial",
        "height": "40 - 80 cm",
        "pollinators": ["Bees", "Butterflies"],
        "benefits": "Beautiful, delicate, deeply-cut leaves and abundant pale pink blooms.",
        "plantingTip": "Thrives in dry, poor soils where it faces less competition.",
        "colorClass": "bg-wildflower",
        "description": "A bushy perennial offering a subtle musky fragrance. It has deeply lobed, feathery foliage and bears large, exceptionally pretty, saucer-shaped pastel pink or white flowers.",
        "usages": "Perfect for gravel gardens, sunny borders, and meadow-scaping.",
        "plantingTime": "Sow seeds or plant in spring."
    },
    {
        "name": "Marsh Woundwort",
        "scientificName": "Stachys palustris",
        "category": "Perennial",
        "height": "50 - 100 cm",
        "pollinators": ["Bumblebees"],
        "benefits": "Prolific flower spikes of rosy-purple, providing superb nectar for bees.",
        "plantingTip": "Vigorous and spreads by tubers; excellent for stabilizing wet banks.",
        "colorClass": "bg-wildflower",
        "description": "A moderately tall wetland perennial sporting downy, lance-shaped leaves. Sturdy square stems bear whorls of hooded, rosy-purple flowers intricately patterned with white markings.",
        "usages": "Essential for large wildlife ponds, boggy soils, and marshland restoration.",
        "plantingTime": "Plant tubers in late autumn or spring."
    },
    {
        "name": "Great Mullein",
        "scientificName": "Verbascum thapsus",
        "category": "Biennial",
        "height": "1 - 2 m",
        "pollinators": ["Bees", "Hoverflies"],
        "benefits": "Architectural felt-like leaves and tall yellow flower spikes.",
        "plantingTip": "Needs very well-drained soil and sun. Self-seeds in gravel.",
        "colorClass": "bg-wildflower",
        "description": "A magnificent architectural biennial. The first year produces a low rosette of large, incredibly soft silvery-grey felted leaves. The second year brings a soaring spike of yellow flowers.",
        "usages": "Stunning in gravel gardens or border backs. Seeds feed birds in winter.",
        "plantingTime": "Sow directly in late spring to summer."
    },
    {
        "name": "Enchanter's Nightshade",
        "scientificName": "Circaea lutetiana",
        "category": "Perennial",
        "height": "20 - 60 cm",
        "pollinators": ["Hoverflies", "Small Moths"],
        "benefits": "Flourishes in deep, dry shade.",
        "plantingTip": "Can spread readily via creeping rhizomes, use in wilder shady spots.",
        "colorClass": "bg-wildflower",
        "description": "A delicate, unassuming woodland native featuring heart-shaped leaves and slender spikes of tiny, deeply lobed white or pale pink flowers in mid-summer.",
        "usages": "Groundcover for deeply shaded, established woodland areas or under mature shrubs.",
        "plantingTime": "Plant out in spring or autumn."
    },
    {
        "name": "Yellow Loosestrife",
        "scientificName": "Lysimachia vulgaris",
        "category": "Perennial",
        "height": "80 - 120 cm",
        "pollinators": ["Specialised Bees"],
        "benefits": "Provides floral oils essential for specialized bees.",
        "plantingTip": "Thrives in moist or wet soils beside water features.",
        "colorClass": "bg-wildflower",
        "description": "A tall, spreading native perennial bearing whorls of soft leaves and bright, starry, golden-yellow flowers in panicles throughout late summer.",
        "usages": "Excellent for pond edges, bog gardens, and moisture-retentive borders.",
        "plantingTime": "Plant from spring to autumn."
    }
];

const SUNLIGHT_PREFS = {
    "Bell Heather": ['full_sun'],
    "Cross-leaved Heath": ['full_sun', 'part_sun'],
    "Common Rock-rose": ['full_sun'],
    "Wild Pansy": ['full_sun', 'part_sun'],
    "Meadow Saxifrage": ['full_sun', 'part_sun', 'part_shade'],
    "Salad Burnet": ['full_sun', 'part_sun'],
    "Wild Mignonette": ['full_sun'],
    "Weld": ['full_sun', 'part_sun'],
    "Wild Basil": ['full_sun', 'part_sun'],
    "Hound's-tongue": ['full_sun', 'part_sun'],
    "Wild Clary": ['full_sun'],
    "Sea Thrift": ['full_sun'],
    "Wood Avens": ['part_shade', 'full_shade', 'dappled'],
    "Eyebright": ['full_sun', 'part_sun'],
    "Yellow Archangel": ['full_shade', 'dappled'],
    "Herb Paris": ['full_shade', 'dappled'],
    "Lily of the Valley": ['part_shade', 'full_shade', 'dappled'],
    "St John's Wort": ['full_sun', 'part_sun'],
    "Lords-and-Ladies": ['part_shade', 'full_shade', 'dappled'],
    "Coltsfoot": ['full_sun', 'part_sun'],
    "Borage": ['full_sun', 'part_sun'],
    "Meadow Vetchling": ['full_sun', 'part_sun'],
    "Tufted Vetch": ['full_sun', 'part_sun'],
    "White Clover": ['full_sun', 'part_sun'],
    "Spindle": ['full_sun', 'part_sun', 'part_shade'],
    "Broom": ['full_sun'],
    "Dogwood": ['full_sun', 'part_sun', 'part_shade'],
    "Wayfaring Tree": ['full_sun', 'part_sun'],
    "Elder": ['full_sun', 'part_sun', 'part_shade', 'dappled'],
    "Hazel": ['part_sun', 'part_shade', 'dappled', 'full_shade'],
    "Field Poppy": ['full_sun'],
    "Corncockle": ['full_sun'],
    "Common Heather": ['full_sun', 'part_sun'],
    "Honeysuckle": ['part_sun', 'part_shade', 'dappled'],
    "Wood Forget-me-not": ['part_shade', 'full_shade', 'dappled'],
    "Pasqueflower": ['full_sun'],
    "Globeflower": ['full_sun', 'part_sun', 'part_shade'],
    "Lady's Mantle": ['full_sun', 'part_sun', 'part_shade'],
    "Goat's-beard": ['full_sun'],
    "Sanicle": ['full_shade', 'dappled'],
    "Water Mint": ['full_sun', 'part_sun', 'part_shade'],
    "Snake's-head Fritillary": ['full_sun', 'part_sun'],
    "Sweet Woodruff": ['part_shade', 'full_shade', 'dappled'],
    "Wild Columbine": ['part_sun', 'part_shade', 'dappled'],
    "Tansy": ['full_sun', 'part_sun'],
    "Agrimony": ['full_sun', 'part_sun'],
    "Musk Mallow": ['full_sun', 'part_sun'],
    "Marsh Woundwort": ['full_sun', 'part_sun', 'part_shade'],
    "Great Mullein": ['full_sun', 'part_sun'],
    "Enchanter's Nightshade": ['full_shade', 'dappled'],
    "Yellow Loosestrife": ['full_sun', 'part_sun', 'part_shade'],
    "Field Forget-me-not": ['full_sun', 'part_sun', 'part_shade'],
    "Corn Marigold": ['full_sun'],
    "Wild Carrot": ['full_sun', 'part_sun'],
    "Red Clover": ['full_sun', 'part_sun'],
    "White Campion": ['full_sun', 'part_sun', 'part_shade'],
    "Betony": ['full_sun', 'part_sun', 'part_shade'],
    "Common Mallow": ['full_sun', 'part_sun'],
    "Yellow Horned Poppy": ['full_sun'],
    "Wild Strawberry": ['part_sun', 'part_shade', 'dappled', 'full_shade'],
    "Greater Knapweed": ['full_sun', 'part_sun'],
    "Viper's Bugloss": ['full_sun', 'part_sun'],
    "Hemp Agrimony": ['part_sun', 'part_shade', 'dappled'],
    "Blackthorn": ['full_sun', 'part_sun', 'part_shade'],
    "Red Campion": ['part_sun', 'part_shade', 'dappled', 'full_shade'],
    "Primrose": ['part_shade', 'full_shade', 'dappled'],
    "Bluebell": ['part_shade', 'full_shade', 'dappled'],
    "Foxglove": ['part_sun', 'part_shade', 'full_shade', 'dappled'],
    "Common Sorrel": ['full_sun', 'part_sun'],
    "Field Scabious": ['full_sun', 'part_sun'],
    "Chicory": ['full_sun'],
    "Snowdrop": ['part_shade', 'full_shade', 'dappled'],
    "Wild Garlic": ['part_shade', 'full_shade', 'dappled'],
    "Cowslip": ['full_sun', 'part_sun', 'part_shade', 'dappled'],
    "Bugle": ['part_shade', 'full_shade', 'dappled'],
    "Yarrow": ['full_sun', 'part_sun'],
    "Wild Marjoram": ['full_sun', 'part_sun'],
    "Sea Campion": ['full_sun'],
    "Gorse": ['full_sun', 'part_sun'],
    "White Dead-nettle": ['part_sun', 'part_shade', 'dappled'],
    "Silverweed": ['full_sun', 'part_sun'],
    "Wild Teasel": ['full_sun', 'part_sun'],
    "Dog Rose": ['full_sun', 'part_sun', 'part_shade'],
    "Selfheal": ['full_sun', 'part_sun', 'part_shade', 'dappled'],
    "Lesser Celandine": ['part_shade', 'full_shade', 'dappled'],
    "Wild Thyme": ['full_sun'],
    "Yellow Rattle": ['full_sun', 'part_sun'],
    "Meadow Cranesbill": ['full_sun', 'part_sun', 'part_shade'],
    "Purple Loosestrife": ['full_sun', 'part_sun', 'part_shade'],
    "Toadflax": ['full_sun', 'part_sun'],
    "Sea Holly": ['full_sun'],
    "Hawthorn": ['full_sun', 'part_sun', 'part_shade'],
    "Rosebay Willowherb": ['full_sun', 'part_sun', 'part_shade', 'dappled'],
    "Lady's Bedstraw": ['full_sun', 'part_sun'],
    "Marsh Marigold": ['full_sun', 'part_sun', 'part_shade', 'dappled'],
    "Mallow": ['full_sun', 'part_sun'],
    "Wood Anemone": ['part_shade', 'full_shade', 'dappled'],
    "Common Knapweed": ['full_sun', 'part_sun'],
    "Devil's-bit Scabious": ['full_sun', 'part_sun', 'part_shade'],
    "Water Avens": ['part_sun', 'part_shade', 'dappled'],
    "Oxeye Daisy": ['full_sun', 'part_sun'],
    "Kidney Vetch": ['full_sun', 'part_sun'],
    "Birds-foot Trefoil": ['full_sun', 'part_sun'],
    "Rowan": ['full_sun', 'part_sun', 'part_shade', 'dappled'],
    "Cornflower": ['full_sun'],
    "Ragged Robin": ['full_sun', 'part_sun', 'part_shade'],
    "Meadow Buttercup": ['full_sun', 'part_sun'],
    "Ivy": ['part_sun', 'part_shade', 'full_shade', 'dappled'],
    "Scottish Harebell": ['full_sun', 'part_sun'],
    "Guelder Rose": ['part_sun', 'part_shade', 'full_shade', 'dappled'],
    "Meadowsweet": ['full_sun', 'part_sun', 'part_shade', 'dappled'],
    "Common Comfrey": ['full_sun', 'part_sun', 'part_shade', 'dappled'],
    "Yellow Flag Iris": ['full_sun', 'part_sun'],
    "Cuckooflower": ['part_sun', 'part_shade', 'dappled'],
    "Herb Robert": ['part_shade', 'full_shade', 'dappled']
};

function getPlantLifeCycle(plant) {
    const textToSearch = ((plant.description || '') + ' ' + (plant.category || '') + ' ' + (plant.plantingTip || '')).toLowerCase();
    if (textToSearch.includes('evergreen')) return 'Evergreen';
    if (textToSearch.includes('annual')) return 'Annual';
    if (textToSearch.includes('biennial')) return 'Biennial';
    if (textToSearch.includes('perennial') || textToSearch.includes('bulb') || (plant.category || '').toLowerCase().includes('tree') || (plant.category || '').toLowerCase().includes('shrub')) return 'Perennial';
    return 'Perennial'; 
}

// Primary Rendering Function
function renderSuggestions() {
    // Generate pool of plants for the region
    const allRegionKeys = ['full_sun', 'part_sun', 'part_shade', 'full_shade', 'dappled'];
    let regionPlantsMap = new Map();
    for (let key of allRegionKeys) {
        let arr = PLANTS_DATASET[`${STATE.region}_${key}`] || [];
        for (let p of arr) {
            if (!regionPlantsMap.has(p.name)) {
                regionPlantsMap.set(p.name, p);
            }
        }
    }
    
    let plants = Array.from(regionPlantsMap.values());
    
    // Inject global native plants
    for (let p of ALL_REGION_NATIVE_PLANTS) {
        if (!plants.find(x => x.name === p.name)) {
            plants.push(p);
        }
    }
    
    // Filter realistically by sunlight requirements
    plants = plants.filter(plant => {
        let prefs = SUNLIGHT_PREFS[plant.name] || ['full_sun', 'part_sun', 'part_shade', 'full_shade', 'dappled'];
        return prefs.includes(STATE.sunlight);
    });

    // Filter by toxicity
    if (STATE.nontoxicOnly) {
        plants = plants.filter(plant => {
            const normalizedName = (plant.name || "").toLowerCase()
                .replace(/\([^)]*\)/g, '')
                .replace(/['’]/g, '')
                .replace(/-/g, ' ')
                .replace(/[^a-z0-9 ]/g, '')
                .replace(/\s+/g, ' ')
                .trim();
            const toxInfo = CLINICAL_PLANT_TOXICOLOGY[normalizedName] || CLINICAL_PLANT_TOXICOLOGY[plant.name.toLowerCase()] || { type: 'safe' };
            return toxInfo.type === 'safe';
        });
    }

    // Filter by text search query
    if (STATE.searchQuery !== '') {
        const query = STATE.searchQuery;
        plants = plants.filter(plant => {
            const nameMatch = plant.name.toLowerCase().includes(query);
            const sciMatch = plant.scientificName.toLowerCase().includes(query);
            const bMatch = plant.benefits.toLowerCase().includes(query);
            const categoryMatch = plant.category.toLowerCase().includes(query);
            const pollinatorMatch = plant.pollinators.some(p => p.toLowerCase().includes(query));
            return nameMatch || sciMatch || bMatch || categoryMatch || pollinatorMatch;
        });
    }

    // Refresh UI Count
    plantCountBadge.innerText = plants.length;

    // Handle Empty States
    if (plants.length === 0) {
        plantsGrid.innerHTML = '';
        emptyState.classList.remove('hidden');
        STATE.currentPlants = [];
        return;
    } else {
        emptyState.classList.add('hidden');
    }

    STATE.currentPlants = plants;

    // Generate plant item cards
    const cardHTMLArray = plants.map((plant, idx) => {
        // Build beautiful pollinator pill badges
        const pollinatorPills = plant.pollinators.slice(0, 2).map(p => {
            let badgeClass = 'bg-accent-light';
            if (p.toLowerCase().includes('bee')) badgeClass = 'bg-bee';
            if (p.toLowerCase().includes('butter') || p.toLowerCase().includes('monarch') || p.toLowerCase().includes('blue')) badgeClass = 'bg-butterfly';
            return `<span class="badge ${badgeClass}">${p}</span>`;
        }).join('');

        const categoryClass = plant.category.toLowerCase().includes('shrub') ? 'bg-shrub' : 'bg-wildflower';
        const lifeCycle = getPlantLifeCycle(plant);

        return `
            <article class="plant-card animate-fade-in" style="animation-delay: ${idx * 0.05}s;" onclick="openPlantDetail(${idx})" role="button" tabindex="0" aria-label="View details for ${plant.name}" onkeydown="if(event.key==='Enter'||event.key===' ') { event.preventDefault(); openPlantDetail(${idx}); }">
                <div class="card-top">
                    <div class="card-badge-row">
                        <span class="badge ${categoryClass}">${plant.category}</span>
                        <span class="badge badge-outline" style="font-size: 0.65rem; padding: 2px 6px;">${lifeCycle}</span>
                        <i data-feather="arrow-right" class="card-action-icon" style="width:14px; height:14px; opacity: 0.6;" aria-hidden="true"></i>
                    </div>
                    <h4>${plant.name}</h4>
                    <span class="scientific-name">${plant.scientificName}</span>
                    <p class="short-desc">${plant.benefits}</p>
                </div>
                <div class="card-bottom">
                    <div class="pollinator-caps">
                        ${pollinatorPills}
                        ${plant.pollinators.length > 2 ? `<span class="pill-capsule">+${plant.pollinators.length - 2} more</span>` : ''}
                    </div>
                    <div class="card-action-hint" aria-hidden="true">
                        <span>Botanical Profile</span>
                        <i data-feather="chevron-right" aria-hidden="true"></i>
                    </div>
                </div>
            </article>
        `;
    });

    plantsGrid.innerHTML = cardHTMLArray.join('');
    
    // Fire feather icon refreshing
    if (window.feather) {
        window.feather.replace();
    }
}

// Clinical-grade Toxicology and Safety database for UK Native Plants
const CLINICAL_PLANT_TOXICOLOGY = {
    "bell heather": {
        status: "Non-Toxic",
        type: "safe",
        text: "Entirely non-toxic and structurally robust. Safe around pets."
    },
    "cross leaved heath": {
        status: "Non-Toxic",
        type: "safe",
        text: "Entirely non-toxic. Safe around pets and children."
    },
    "common rock rose": {
        status: "Non-Toxic",
        type: "safe",
        text: "Non-toxic and totally safe for humans and pets."
    },
    "wild pansy": {
        status: "Non-Toxic / Edible",
        type: "safe",
        text: "Safe and widely used as an edible flower garnish."
    },
    "meadow saxifrage": {
        status: "Non-Toxic",
        type: "safe",
        text: "Considered non-toxic. Historically used as a herbal remedy."
    },
    "salad burnet": {
        status: "Non-Toxic / Edible",
        type: "safe",
        text: "Fully non-toxic and edible. The young leaves taste like cucumber."
    },
    "wild mignonette": {
        status: "Non-Toxic",
        type: "safe",
        text: "Non-toxic to humans and animals."
    },
    "weld": {
        status: "Non-Toxic / Dye Plant",
        type: "safe",
        text: "Safe and historically used as a primary source for strong yellow vegetable dye."
    },
    "wild basil": {
        status: "Non-Toxic / Herbal",
        type: "safe",
        text: "A completely safe, mildly aromatic member of the mint family used as a wild herb."
    },
    "hounds tongue": {
        status: "Toxic (Liver)",
        type: "danger",
        text: "Contains pyrrolizidine alkaloids which can cause severe liver damage if ingested. Toxic to grazing livestock, particularly horses and cows."
    },
    "wild clary": {
        status: "Non-Toxic / Herbal",
        type: "safe",
        text: "Considered non-toxic and historically utilized as an eye-clearing tonic."
    },
    "sea thrift": {
        status: "Non-Toxic",
        type: "safe",
        text: "Non-toxic and perfectly safe for coastal or garden planting around children and pets."
    },
    "wood avens": {
        status: "Non-Toxic / Herbal",
        type: "safe",
        text: "The roots contain eugenol (like cloves) and were used historically to flavor ale. Non-toxic."
    },
    "eyebright": {
        status: "Non-Toxic",
        type: "safe",
        text: "Generally considered non-toxic and historically used as an herbal remedy for eye ailments."
    },
    "yellow archangel": {
        status: "Non-Toxic",
        type: "safe",
        text: "A non-stinging member of the dead-nettle family, it is completely safe and harmless."
    },
    "herb paris": {
        status: "Highly Toxic",
        type: "danger",
        text: "All parts of the plant, especially the singular large black berry, are poisonous and contain toxic saponins. Keep well away from children."
    },
    "lily of the valley": {
        status: "Highly Toxic",
        type: "danger",
        text: "Contains over 30 cardiac glycosides. All parts, including the water it sits in if cut, are extremely poisonous and can cause severe heart irregularities."
    },
    "st johns wort": {
        status: "Moderately Toxic / Photosensitizer",
        type: "warning",
        text: "Contains hypericin, which can cause severe photosensitization (sunburn and skin damage) in livestock if grazed, and vomiting in pets."
    },
    "lords and ladies": {
        status: "Highly Toxic / Irritant",
        type: "danger",
        text: "All parts, especially the bright red berries, contain microscopic needle-like calcium oxalate crystals and toxins that cause intense swelling, burning, and breathing difficulties if chewed."
    },
    "coltsfoot": {
        status: "Mildly Toxic (Liver)",
        type: "warning",
        text: "Contains pyrrolizidine alkaloids which can cause liver damage if consumed in large or prolonged quantities. Unlikely to be eaten by pets."
    },
    "borage": {
        status: "Mildly Toxic (Liver)",
        type: "warning",
        text: "Contains small amounts of pyrrolizidine alkaloids. Harmless as an occasional garnish, but shouldn't be consumed in large, concentrated quantities regularly."
    },
    "meadow vetchling": {
        status: "Moderately Toxic (Seeds)",
        type: "warning",
        text: "Like many Lathyrus species, the seeds contain neurotoxins and can cause lathyrism if consumed in large quantities. Do not safely ingest."
    },
    "tufted vetch": {
        status: "Non-Toxic / Herbivore Safe",
        type: "safe",
        text: "Generally considered safe and is widely consumed by grazing livestock and wild herbivores without ill effect."
    },
    "white clover": {
        status: "Non-Toxic / Edible",
        type: "safe",
        text: "Safe and widely utilized as a pasture crop. Flowers and young leaves are edible to humans and pets."
    },
    "spindle": {
        status: "Highly Toxic",
        type: "danger",
        text: "All parts, especially the bright orange seeds and pink capsules, contain cardiac glycosides and alkaloids. Ingestion causes severe purgative distress and cardiac issues."
    },
    "broom": {
        status: "Moderately Toxic",
        type: "warning",
        text: "Contains toxic alkaloids like sparteine. Ingestion of seeds or significant foilage can cause gastrointestinal and cardiovascular symptoms. Toxic to pets and livestock."
    },
    "dogwood": {
        status: "Mildly Toxic / Irritant",
        type: "warning",
        text: "The berries are considered mildly toxic, causing severe nausea and vomiting if eaten by humans. Sap can cause skin irritation."
    },
    "wayfaring tree": {
        status: "Mildly Toxic",
        type: "warning",
        text: "The berries are mildly poisonous if eaten raw in large amounts, causing digestive upset. Safe once properly cooked, though rarely foraged."
    },
    "elder": {
        status: "Toxic Raw / Safe Cooked",
        type: "warning",
        text: "Raw berries, leaves, bark, and roots contain cyanogenic glycosides resulting in severe nausea. Fully safe once the berries or flowers are thoroughly cooked or extracted."
    },
    "hazel": {
        status: "Non-Toxic / Edible",
        type: "safe",
        text: "Completely safe. Produces high-quality edible hazelnuts (cobnuts) consumed by humans and wildlife alike."
    },
    "field poppy": {
        status: "Mildly Toxic",
        type: "warning",
        text: "Contains mild alkaloids. Can cause stomach ache if ingested in large quantities by pets or livestock."
    },
    "corncockle": {
        status: "Highly Toxic",
        type: "danger",
        text: "The seeds contain saponins and are highly toxic if ingested. Keep away from pets and do not ingest."
    },
    "common heather": {
        status: "Non-Toxic / Fully Safe",
        type: "safe",
        text: "Entirely non-toxic and structurally robust. Safe around pets."
    },
    "honeysuckle": {
        status: "Mildly Toxic (Berries)",
        type: "warning",
        text: "The vines and flowers are non-toxic, but the bright red berries are mildly poisonous and can cause gastrointestinal upset if eaten by humans or pets."
    },
    "wood forget-me-not": {
        status: "Non-Toxic / Fully Safe",
        type: "safe",
        text: "Fully safe and non-toxic to humans, dogs, cats, and livestock."
    },
    "pasqueflower": {
        status: "Moderately Toxic",
        type: "warning",
        text: "Contains protoanemonin. Handling crushed leaves may cause skin irritation. Ingestion causes severe gastrointestinal distress."
    },
    "globeflower": {
        status: "Mildly Toxic",
        type: "warning",
        text: "Like many plants in the buttercup family, it contains protoanemonin which can cause mild skin irritation or digestive upset if ingested fresh."
    },
    "ladys mantle": {
        status: "Non-Toxic / Herbal",
        type: "safe",
        text: "Considered non-toxic and utilized in traditional herbal medicine as a mild astringent."
    },
    "goats beard": {
        status: "Non-Toxic / Safe",
        type: "safe",
        text: "Non-toxic and totally safe. The young shoots and roots are sometimes considered edible."
    },
    "sanicle": {
        status: "Non-Toxic / Safe",
        type: "safe",
        text: "Generally considered non-toxic. It was historically used as an herbal wound-healing remedy."
    },
    "water mint": {
        status: "Non-Toxic / Edible",
        type: "safe",
        text: "Safe and edible in moderation. As with all mints, it contains essential oils that are generally safe but may cause mild gastrointestinal upset if consumed in extremely large quantities by pets."
    },
    "snakes head fritillary": {
        status: "Mildly Toxic",
        type: "warning",
        text: "Contains alkaloids that can cause vomiting and low blood pressure if ingested in large amounts. The bulbs are the most toxic part."
    },
    "sweet woodruff": {
        status: "Mildly Toxic / Coumarins",
        type: "warning",
        text: "Safe as a garden plant, but contains coumarin, which can have an anti-coagulant effect if ingested in exceptionally large amounts. Mild consumption safe for humans."
    },
    "wild columbine": {
        status: "Mildly Toxic",
        type: "warning",
        text: "The seeds and roots contain cardiogenic toxins which can cause severe gastroenteritis and heart palpitations if eaten in large quantities."
    },
    "tansy": {
        status: "Moderately Toxic / Abortifacient",
        type: "warning",
        text: "Contains thujone, which is toxic in large doses and can act as an abortifacient. Avoid ingestion, especially if pregnant. Keep livestock away from heavy grazing."
    },
    "agrimony": {
        status: "Non-Toxic / Herbal",
        type: "safe",
        text: "Generally considered safe and historically used as a mild astringent herb for teas and gargles."
    },
    "musk mallow": {
        status: "Non-Toxic / Edible",
        type: "safe",
        text: "Entirely non-toxic. Leaves and flowers are edible and safe for pets and livestock."
    },
    "marsh woundwort": {
        status: "Non-Toxic / Edible Tubers",
        type: "safe",
        text: "Non-toxic and safe. Cultivated historically for its crisp, edible tubers."
    },
    "great mullein": {
        status: "Non-Toxic / Minor Irritant",
        type: "safe",
        text: "Generally safe. The fuzzy hairs on the leaves can occasionally cause contact dermatitis or minor skin irritation in sensitive individuals, and shouldn't be ingested raw."
    },
    "enchanters nightshade": {
        status: "Non-Toxic",
        type: "safe",
        text: "Despite the ominous name, this plant is not a true nightshade (Solanaceae) and is non-toxic to humans and animals."
    },
    "yellow loosestrife": {
        status: "Non-Toxic / Fully Safe",
        type: "safe",
        text: "Fully non-toxic and safe for all households. Generally unpalatable to most livestock but completely harmless."
    },
    "field forget-me-not": {
        status: "Non-Toxic / Fully Safe",
        type: "safe",
        text: "Fully non-toxic to humans, dogs, cats, and livestock."
    },
    "corn marigold": {
        status: "Non-Toxic / Fully Safe",
        type: "safe",
        text: "Non-toxic and safe for environments with pets and children."
    },
    "wild carrot": {
        status: "Mildly Toxic (Skin Irritant)",
        type: "safe",
        text: "The foliage can cause mild phytophotodermatitis in sensitive individuals if handled in strong sunlight. Otherwise safe, and the root of the first-year plant is edible."
    },
    "red clover": {
        status: "Non-Toxic / Edible",
        type: "safe",
        text: "Safe, non-toxic, and traditionally used in herbal teas. Contains isoflavones (phytoestrogens) so excessive consumption by livestock may affect breeding, but entirely safe for typical garden setups."
    },
    "white campion": {
        status: "Non-Toxic / Fully Safe",
        type: "safe",
        text: "Completely safe. No known toxicity for humans or pets."
    },
    "betony": {
        status: "Non-Toxic / Herbal",
        type: "safe",
        text: "Safe and historically used as an astringent herb. Not poisonous to humans, dogs, or cats."
    },
    "common mallow": {
        status: "Non-Toxic / Edible Leaves",
        type: "safe",
        text: "Safe and edible. Leaves and flowers can be added to salads. Non-toxic to dogs and cats."
    },
    "yellow horned poppy": {
        status: "Moderately Toxic",
        type: "warning",
        text: "Contains toxic isoquinoline alkaloids (such as glaucine). Ingestion can cause respiratory distress, vomiting, and neurological symptoms. Keep away from pets and do not ingest."
    },
    "wild strawberry": {
        status: "Non-Toxic / Edible",
        type: "safe",
        text: "Perfectly safe and produces delicious edible miniature fruit. Non-toxic to pets."
    },
    "greater knapweed": {
        status: "Non-Toxic / Fully Safe",
        type: "safe",
        text: "Fully safe and non-toxic to humans, pets, and grazing livestock."
    },
    "vipers bugloss": {
        status: "Moderately Toxic",
        type: "warning",
        text: "Contains toxic pyrrolizidine alkaloids (primarily heliosupine and echimidine). Chronic ingestion in humans causes localised liver damage, specifically veno-occlusive disease. Direct physical handling of its stiff, bristly hairs can cause severe skin irritation and contact dermatitis. Highly toxic to grazing animals, horses, and livestock upon pasture grazing, producing cumulative, irreversible liver necrosis."
    },
    "hemp agrimony": {
        status: "Moderately Toxic",
        type: "warning",
        text: "Contains toxic pyrrolizidine alkaloids (such as supinine). Ingestion by humans, dogs, cats, or livestock causes stomach discomfort, nausea, and cumulative liver irritation (hepatotoxic injury). Safe to handle and touch, but raw foliage or stems should never be consumed."
    },
    "blackthorn": {
        status: "Moderately Toxic (Cyanogenic)",
        type: "warning",
        text: "The flesh of sloe berries is non-toxic and edible. However, raw stones, leaves, and bark contain cyanogenic glycosides that release highly toxic hydrogen cyanide when crushed and ingested. Rigid thorns present a physical puncture wound hazard, easily introducing deep-seated bacterial or fungal infections."
    },
    "red campion": {
        status: "Non-Toxic / Fully Safe",
        type: "safe",
        text: "Completely non-toxic to humans, dogs, cats, and pasture animals. Contains mild saponins that are harmless to mammals under all practical conditions. Safe to handle and grow in schools or public spaces."
    },
    "primrose": {
        status: "Non-Toxic / Low Irritant",
        type: "safe",
        text: "Entirely non-toxic to humans and animals. Flowers are edible. Handling can occasionally spark very minor contact dermatitis in individuals sensitive to Primula species. Raw ingestion by cats or dogs is non-poisonous, but can cause mild, temporary stomach irritation."
    },
    "bluebell": {
        status: "Highly Toxic",
        type: "danger",
        text: "All parts, especially the bulbs, contain dangerous cardiac glycosides (scillarens). Highly toxic if ingested. Causes severe stomach pain, persistent vomiting, diarrhoea, slow heart rate, and hypocalcemia in humans, dogs, cats, and grazing herds."
    },
    "foxglove": {
        status: "Extremely Poisonous / Fatal",
        type: "danger",
        text: "CRITICAL HAZARD. Every part of the foxglove contains extremely potent cardiac glycosides (including digoxin, digitoxin, and gitalin). Ingesting even small amounts is a severe medical emergency for humans, dogs, cats, horses, and livestock. Symptoms include severe nausea, vomiting, dangerous cardiac arrhythmias, muscle tremors, seizures, and fatal cardiac arrest. Always wash hands after handling or wear gloves. Keep strictly away from grazing livestock or curious domestic pets."
    },
    "common sorrel": {
        status: "Mildly Toxic (Oxalates)",
        type: "warning",
        text: "Edible for humans in culinary quantities, but highly concentrated in soluble calcium oxalates. Swallowing massive raw volumes causes severe kidney stone risks or calcium binding. Highly toxic to grazing animals, cattle, and sheep, leading to muscle weakness, tremors, and acute renal failure."
    },
    "field scabious": {
        status: "Non-Toxic / Fully Safe",
        type: "safe",
        text: "Completely non-toxic and hazard-free. Perfectly safe to handle, plant, or touch for humans, children, dogs, cats, horses, and wildlife."
    },
    "chicory": {
        status: "Non-Toxic / Edible",
        type: "safe",
        text: "Nutritious and edible. Roots are roasted as a coffee substitute and leaves are eaten as bitter greens. Wholly non-toxic and highly safe for dogs, cats, humans, and livestock."
    },
    "snowdrop": {
        status: "Moderately Toxic",
        type: "warning",
        text: "All parts, particularly the underground bulbs, contain toxic alkaloids (lycorine and galantamine). Ingestion leads to severe vomiting, abdominal pain, drooling, and diarrhoea in humans, dogs, and cats. Always store loose bulbs safely out of reach of pets."
    },
    "wild garlic": {
        status: "Safe for Humans / Toxic to Pets",
        type: "warning",
        text: "Thoroughly edible and delicious for human dishes. However, it is highly toxic to dogs, cats, and horses because it contains organic sulphur compounds (thiosulfates) which damage red blood cells, causing Heinz body haemolytic anaemia. Symptoms in pets include lethargy, pale gums, vomiting, rapid breathing, and dark urine. Keep away from pets."
    },
    "cowslip": {
        status: "Non-Toxic / Minimal Hazard",
        type: "safe",
        text: "Very safe and non-toxic. Beautiful spring flowers are edible. Simple contact with the fuzzy stems might occasionally cause superficial skin redness in highly sensitive people. Ingesting large portions might cause minor gastric irritation in pets due to saponins."
    },
    "bugle": {
        status: "Non-Toxic / Fully Safe",
        type: "safe",
        text: "Wholly non-toxic and safe. Free of toxic alkaloids or saponins. Harmless to humans, dogs, cats, and all grazing livestock."
    },
    "yarrow": {
        status: "Mildly Toxic to Pets",
        type: "warning",
        text: "Contains thujone and sesquiterpene lactones. Low human toxicity, though contact with foliage can trigger allergic dermatitis in sensitive gardeners. Highly toxic to dogs, cats, and horses, causing increased urination, vomiting, severe diarrhoea, and raw, irritated skin."
    },
    "wild marjoram": {
        status: "Safe for Humans / Mild Pet Irritant",
        type: "safe",
        text: "Safe and highly edible for humans as a culinary herb. However, eating raw wild marjoram in bulk or exposure to concentrated essential oil is toxic to dogs and cats, causing severe gastrointestinal irritation, vomiting, and diarrhoea."
    },
    "sea campion": {
        status: "Non-Toxic / Low Hazard",
        type: "safe",
        text: "Low toxicity and virtually hazard-free. Houses mild saponins which present zero systemic risk to humans or pets unless consumed in unrealistic mass quantities."
    },
    "lesser celandine": {
        status: "Moderately Toxic",
        type: "warning",
        text: "Contains ranunculin, which quickly produces highly irritating protoanemonin when the leaves or stems are bruised or chewed. Raw ingestion causes burning of the mouth, swelling of the tongue, and gastric pain in humans and grazing pets (dogs, cats, horses, sheep). Sap contact can cause raw, blistering dermatitis."
    },
    "wood anemone": {
        status: "Moderately Toxic",
        type: "warning",
        text: "Contains ranunculin, converting into blistering protoanemonin upon mechanical plant damage. Toxic raw. Ingestion causes severe oral burning, throat swelling, vomiting, and bloody diarrhoea. Direct sap contact causes severe skin blistering and dermatitis."
    },
    "ivy": {
        status: "Moderately Toxic",
        type: "warning",
        text: "Contains toxic triterpenoid saponins (hederacosides) and irritant polyacetylenes. Ingesting foliage or berries is toxic to humans and domestic animals, leading to heavy salivation, vomiting, intense stomach pain, and diarrhoea. Sap contact frequently causes blistering skin dermatitis."
    },
    "gorse": {
        status: "Mildly Toxic (Seeds Only)",
        type: "warning",
        text: "Seeds contain cytisine, a toxic quinolizidine alkaloid. Ingestion of seeds is toxic to humans, dogs, cats, and horses, leading to severe nausea, dizziness, and respiratory problems. The brilliant yellow flowers are edible in minor amounts. The extremely sharp wooden thorns present a physical puncture hazard."
    },
    "white dead nettle": {
        status: "Non-Toxic / Truly Safe",
        type: "safe",
        text: "Completely non-toxic, non-stinging, and highly edible. Stems, leaves, and nectar-rich flowers pose zero toxicity or mechanical hazards to humans, pets, or livestock."
    },
    "white deadnettle": {
        status: "Non-Toxic / Truly Safe",
        type: "safe",
        text: "Completely non-toxic, non-stinging, and highly edible. Stems, leaves, and nectar-rich flowers pose zero toxicity or mechanical hazards to humans, pets, or livestock."
    },
    "silverweed": {
        status: "Non-Toxic / Safe",
        type: "safe",
        text: "Totally non-toxic, rich in astringent tannins, and safe. Roots were historically roasted and eaten. Non-poisonous to dogs, cats, horses, or grazing animals."
    },
    "wild teasel": {
        status: "Non-Toxic / Safe",
        type: "safe",
        text: "Free of chemical toxins and highly beneficial for wintering seed-eating birds. Sharp prickly stems pose a physical mechanical scratching hazard, but the plant carries absolute zero chemical toxicity to humans or animals."
    },
    "dog rose": {
        status: "Non-Toxic / Safe",
        type: "safe",
        text: "Chemically safe and non-toxic. Ripe hips make highly nutritious syrup, but the small internal seed hairs are mechanical irritants and must be removed to avoid severe throat itching. Sharp thorns present a physical scratching hazard, but otherwise the plant is non-poisonous to pets."
    },
    "selfheal": {
        status: "Non-Toxic / Safe",
        type: "safe",
        text: "Entirely non-toxic, safe, and historically prominent in traditional wound healing. Certified safe for domestic pets, children, and farm stock."
    },
    "wild thyme": {
        status: "Safe for Humans / Mild Pet Irritant",
        type: "safe",
        text: "Edible culinary herb entirely safe for humans. Raw consumption in large amounts or ingestion of concentrated essential oils is toxic to dogs and cats, triggering gastric irritation, vomiting, and diarrhoea."
    },
    "yellow rattle": {
        status: "Moderately Toxic",
        type: "warning",
        text: "Contains toxic rhinanthin. Highly toxic to grazing horses and livestock; can cause sleepiness, diarrhoea, coordination loss, paralysis, or death if mixed extensively in winter hay. General handling is safe, but keep far from animal forage supplies."
    },
    "meadow cranesbill": {
        status: "Non-Toxic / Fully Safe",
        type: "safe",
        text: "Chemically safe. Contains astringent tannins but has zero poisonous or toxic qualities. Completely safe for dogs, cats, children, and farm herds."
    },
    "purple loosestrife": {
        status: "Non-Toxic / Safe",
        type: "safe",
        text: "Completely non-toxic. Possesses no toxic alkaloids or glycosides. Fully safe to prune, touching, and planting in areas frequented by domestic dogs, cats, or livestock."
    },
    "toadflax": {
        status: "Mildly Toxic",
        type: "warning",
        text: "Contains peganine and lanatosides. Toxic to cattle, sheep, and horses, though they usually avoid its bitter taste. Ingestion can cause gastrointestinal inflammation and respiratory issues. Safe/low toxicity to dogs and cats unless bulk quantities are eaten. Safe to handle with bare hands."
    },
    "sea holly": {
        status: "Non-Toxic / Safe",
        type: "safe",
        text: "Completely non-toxic. Roots are edible and historically candied. The sharp, spiny leaves act as a physical deterrent, but the plant holds absolutely zero chemical poisons for humans, dogs, or cats."
    },
    "hawthorn": {
        status: "Seeds contain Cyanogenic Glycosides",
        type: "warning",
        text: "Berries are edible, but the hard interior seeds contain cyanogenic glycosides and release hydrogen cyanide if crushed. Ingestion of many whole haws (with seeds) is moderately toxic to dogs, cats, and livestock, prompting digestive upset. Physical puncture from sharp thorns is also a scratch hazard."
    },
    "rosebay willowherb": {
        status: "Non-Toxic / Edible",
        type: "safe",
        text: "Completely edible, safe, and non-toxic to humans, dogs, cats, and livestock. Highly recommended for wildlife gardens with zero poisonous risks."
    },
    "ladys bedstraw": {
        status: "Non-Toxic / Safe",
        type: "safe",
        text: "Wholly non-toxic and hazard-free. Yellow flowers contain coumarins which smell sweet and repel fleas. Completely safe for pasture herds, domestic pets, and children."
    },
    "marsh marigold": {
        status: "Moderately Toxic",
        type: "warning",
        text: "Contains ranunculin, reverting to harsh, biting protoanemonin when crushed. Raw ingestion causes powerful mouth blistering, salivation, severe colic, and bloody diarrhoea in humans and pets. Sap contact easily blisters human skin. Prune using gloves."
    },
    "mallow": {
        status: "Non-Toxic / Safe",
        type: "safe",
        text: "Completely non-toxic and edible. Safe for human salads and entirely non-poisonous to dogs, cats, and wildlife. (In agricultural pastures with high artificial nitrates, it can store nitrates, but practically it is fully non-toxic to residential gardens)."
    },
    "common knapweed": {
        status: "Non-Toxic / Safe",
        type: "safe",
        text: "Perfectly non-toxic, safe, and hazard-free. Highly attractive to wild birds for seeds, with absolute zero toxic concerns for dogs, cats, horses, or kids."
    },
    "devils bit scabious": {
        status: "Non-Toxic / Safe",
        type: "safe",
        text: "Completely non-toxic and safe to grow. Free of all harmful alkaloids, posing no physical or chemical danger to pets, humans, or pasture animals."
    },
    "devilsbit scabious": {
        status: "Non-Toxic / Safe",
        type: "safe",
        text: "Completely non-toxic and safe to grow. Free of all harmful alkaloids, posing no physical or chemical danger to pets, humans, or pasture animals."
    },
    "water avens": {
        status: "Non-Toxic / Safe",
        type: "safe",
        text: "Completely non-toxic. Roots contain eugenol (scents of clove) and can be used in teas. Safe for dogs, cats, and pasture animals."
    },
    "oxeye daisy": {
        status: "Non-Toxic / Low Hazard",
        type: "safe",
        text: "Mild contact allergen for individuals sensitive to the Asteraceae (daisy) family, but chemically non-toxic. Ingestion of large quantities of rough foliage can cause self-limiting, mild digestive irritation in dogs or cats, but it is not poisonous."
    },
    "kidney vetch": {
        status: "Non-Toxic / Highly Beneficial",
        type: "safe",
        text: "Superbly safe and non-toxic. Extensively cultivated as high-nutrient forage for pasture sheep and cattle. Wholly non-poisonous to dogs, cats, and humans."
    },
    "birds foot trefoil": {
        status: "Safe for Pets / Trace Risk in Bulk",
        type: "safe",
        text: "Contains very minor cyanogenic glycosides. Safe for household dogs and cats. In standard grazing, it is an excellent wildflower forage, but in rare absolute monopoly grazing of pure pastures, it contains light trace cyanide risks for livestock herds."
    },
    "birdsfoot trefoil": {
        status: "Safe for Pets / Trace Risk in Bulk",
        type: "safe",
        text: "Contains very minor cyanogenic glycosides. Safe for household dogs and cats. In standard grazing, it is an excellent wildflower forage, but in rare absolute monopoly grazing of pure pastures, it contains light trace cyanide risks for livestock herds."
    },
    "rowan": {
        status: "Toxic Raw / Safe Cooked",
        type: "warning",
        text: "The raw orange-red berries contain bitter parasorbic acid, which causes severe stomach upset, vomiting, and diarrhoea in humans and pets (dogs, cats). Seeds contain cyanogenic glycosides and must not be consumed. Cooking rowan berries completely neutralises parasorbic acid, making rowan jelly safe and edible."
    },
    "cornflower": {
        status: "Non-Toxic / Edible",
        type: "safe",
        text: "Entirely safe, edible, and non-toxic. The bright blue petals are a popular edible garnish. Wholly non-poisonous to humans, dogs, cats, and grazing animals."
    },
    "ragged robin": {
        status: "Non-Toxic / Safe",
        type: "safe",
        text: "Extremely low human and pet toxicity. Contains negligible trace saponins that present zero clinical hazard in domestic gardens."
    },
    "meadow buttercup": {
        status: "Moderately Toxic",
        type: "warning",
        text: "Contains ranunculin, converting into burning protoanemonin when raw cells are damaged. Eating the raw plant causes painful mouth blistering, drooling, severe colic, and diarrhoea in humans, dogs, cats, and horses. Sap contact can blister skin. (Safely inert when dried in winter hay)."
    },
    "scottish harebell": {
        status: "Non-Toxic / Fully Safe",
        type: "safe",
        text: "Fully non-toxic, safe, and delicate. Zero poisonous properties for humans, dogs, cats, or pasture animals."
    },
    "guelder rose": {
        status: "Mildly Toxic Raw / Safe Cooked",
        type: "warning",
        text: "Berries are mildly toxic in their raw state due to viburnin. Ingestion can cause stomach upset, vomiting, and diarrhoea in humans and pets. Completely safe and edible when cooked into jellies."
    },
    "meadowsweet": {
        status: "Safe / Medicinal Cautions",
        type: "safe",
        text: "Generally non-toxic and historically used as an herbal remedy. Contains naturally occurring salicylic acid (a precursor to aspirin), so ingestion should be avoided by humans or pets with known aspirin sensitivities."
    },
    "common comfrey": {
        status: "Moderately Toxic (Hepatotoxic)",
        type: "warning",
        text: "Contains pyrrolizidine alkaloids (PAs) which are cumulatively hepatotoxic. Chronic or bulk ingestion over time causes irreversible liver damage in humans, horses, and livestock. External contact is entirely safe."
    },
    "yellow flag iris": {
        status: "Moderately Toxic / Severe Contact Irritant",
        type: "warning",
        text: "All parts, particularly rhizomes, contain irritating resinous compounds (irisin). Ingestion causes severe burning mouth pain and gastric distress. Copious handling of wet cut root systems can cause blistering contact dermatitis."
    },
    "cuckooflower": {
        status: "Non-Toxic / Edible",
        type: "safe",
        text: "Completely non-toxic to humans, dogs, cats, and livestock. The leaves are edible and have a slightly pungent, peppery flavour reminiscent of watercress."
    },
    "herb robert": {
        status: "Non-Toxic / Safe",
        type: "safe",
        text: "Fully non-toxic and safe for all households. Although the crushed leaves emit a distinctive pungent smell sometimes used to deter mosquitoes, the plant is chemically inert."
    }
};

// Modal Detail Overlay Operations
function openPlantDetail(index) {
    const seedPlant = STATE.currentPlants[index];
    
    if (!seedPlant) return;

    STATE.selectedPlant = seedPlant;

    // Fill Modal elements
    drawerCategory.innerText = seedPlant.category.toUpperCase();
    drawerCategory.className = `plant-category ${seedPlant.category.toLowerCase().includes('shrub') ? 'color-green' : ''}`;
    
    const lifeCycleEl = document.getElementById('drawerLifeCycle');
    if (lifeCycleEl) {
        lifeCycleEl.innerText = getPlantLifeCycle(seedPlant).toUpperCase();
    }
    
    drawerName.innerText = seedPlant.name;
    drawerScientificName.innerText = seedPlant.scientificName;
    drawerHeight.innerText = seedPlant.height;

    // Map label representation
    let currentSunlight = STATE.sunlight;
    let sunlightLabel = 'Full Sun';
    if (currentSunlight === 'part_sun') sunlightLabel = 'Part Sun';
    else if (currentSunlight === 'part_shade') sunlightLabel = 'Part Shade';
    else if (currentSunlight === 'full_shade') sunlightLabel = 'Full Shade';
    else if (currentSunlight === 'dappled') sunlightLabel = 'Filtered Sun / Dappled';
    drawerSunlight.innerText = sunlightLabel;

    // Fill new detailed description fields
    document.getElementById('drawerDesc').innerText = seedPlant.description || 'No detailed botanical description available.';
    document.getElementById('drawerUses').innerText = seedPlant.usages || 'No specific usage information established.';
    document.getElementById('drawerPlantTime').innerText = seedPlant.plantingTime || 'Plant in spring or early autumn.';

    // Generate dynamic care guide with British English
    const isTreeShrub = seedPlant.category.toLowerCase().includes('tree') || seedPlant.category.toLowerCase().includes('shrub');
    const isBulb = seedPlant.category.toLowerCase().includes('bulb');
    const isAnnual = seedPlant.category.toLowerCase().includes('annual');
    
    let wateringAdvice = "Water regularly during the first growing season to establish a deep, extensive root system. Once established, requires little to no supplemental watering unless experiencing prolonged drought.";
    let pruningAdvice = "Deadhead spent flowers to encourage continuous blooming. Cut back foliage in late autumn or early spring before new growth appears.";
    let feedingAdvice = "Fertiliser is rarely necessary for native wildflowers; in fact, they often thrive better in poor soil.";

    if (isTreeShrub) {
        wateringAdvice = "Water deeply and regularly during the first two years of establishment. Mulch well in spring to retain moisture.";
        pruningAdvice = "Prune in late winter or early spring during dormancy to maintain shape and remove any dead, diseased, or crossing branches.";
        feedingAdvice = "Apply a general-purpose, slow-release fertiliser or a mulch of well-rotted organic matter around the base in early spring.";
    } else if (isBulb) {
        wateringAdvice = "Water moderately during active growth in spring. Allow the soil to dry out during summer dormancy.";
        pruningAdvice = "Do not remove foliage after flowering until it has turned completely yellow and died back naturally, as this feeds the bulb for next year.";
        feedingAdvice = "Apply a light top-dressing of bone meal or a low-nitrogen fertiliser in autumn or early spring as shoots emerge.";
    } else if (isAnnual) {
        wateringAdvice = "Water regularly during dry spells to ensure continuous flowering, but do not let the soil become waterlogged.";
        pruningAdvice = "Deadhead regularly to prolong the flowering display. Allow to set seed at the end of the season if self-seeding is desired.";
        feedingAdvice = "No feeding is generally required, though a light liquid feed in mid-summer can boost flowering on poorer soils.";
    } else if (currentSunlight === 'full_shade' || currentSunlight === 'dappled') {
         wateringAdvice = "Ensure the soil remains consistently moist, mimicking a woodland floor environment, particularly during dry spells.";
         feedingAdvice = "Top-dress with leaf mould or compost in autumn to simulate natural woodland leaf drop. Avoid strong chemical fertilisers.";
    }

    if (seedPlant.plantingTip && seedPlant.plantingTip.toLowerCase().includes('dry')) {
        wateringAdvice = "Highly drought-tolerant once established. Ensure excellent drainage and water extremely sparingly to avoid waterlogging.";
    }
    
    const cw = document.getElementById('drawerCareWatering');
    const cp = document.getElementById('drawerCarePruning');
    const cf = document.getElementById('drawerCareFeeding');
    if (cw) cw.innerText = wateringAdvice;
    if (cp) cp.innerText = pruningAdvice;
    if (cf) cf.innerText = feedingAdvice;

    drawerBenefits.innerText = seedPlant.benefits;
    drawerTip.innerText = seedPlant.plantingTip;

    // Handle Toxicology and Safety profiling
    const normalizedName = (seedPlant.name || "").toLowerCase()
        .replace(/\([^)]*\)/g, '') // Remove parentheses and their content
        .replace(/['’]/g, '')
        .replace(/-/g, ' ') // Handle hyphenated names
        .replace(/[^a-z0-9 ]/g, '') // Remove punctuation but keep spaces
        .replace(/\s+/g, ' ')
        .trim();

    const toxRecord = CLINICAL_PLANT_TOXICOLOGY[normalizedName] || {
        status: "General Safety Profile",
        type: "safe",
        text: "This native species is generally classified as non-toxic and highly safe for standard domestic gardens. Standard gardening hygiene applies: wash hands after pruning or planting, and avoid deliberate raw ingestion."
    };

    const statusEl = document.getElementById('drawerToxicStatus');
    const descEl = document.getElementById('drawerToxicity');
    if (statusEl && descEl) {
        statusEl.innerText = toxRecord.status.toUpperCase();
        
        // Use semantic class names defined in style.css
        let typeClass = 'tox-badge-safe';
        if (toxRecord.type === 'warning' || (toxRecord.colorClass && toxRecord.colorClass.includes('amber'))) typeClass = 'tox-badge-warning';
        if (toxRecord.type === 'danger' || (toxRecord.colorClass && toxRecord.colorClass.includes('red'))) typeClass = 'tox-badge-danger';
        
        statusEl.className = `tox-badge ${typeClass}`;
        descEl.innerText = toxRecord.text;
    } else {
        console.error("Toxicology elements not found in drawer:", { statusEl: !!statusEl, descEl: !!descEl });
    }

    // reset all accordions to closed state when opening new plant
    document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        const btn = item.querySelector('.accordion-header');
        if (btn) btn.setAttribute('aria-expanded', 'false');
    });

    // Map pollinator badges inside Drawer
    const pillHTML = seedPlant.pollinators.map(p => {
        let badgeClass = 'bg-accent-light';
        if (p.toLowerCase().includes('bee')) badgeClass = 'bg-bee';
        if (p.toLowerCase().includes('butter') || p.toLowerCase().includes('monarch') || p.toLowerCase().includes('blue')) badgeClass = 'bg-butterfly';
        return `<span class="badge ${badgeClass}" style="margin-right: 6px; margin-bottom: 6px; padding: 6px 12px; font-size: 0.8rem;">${p}</span>`;
    }).join('');
    
    drawerPollinators.innerHTML = pillHTML;

    // Reveal overlay with subtle delays
    plantDrawer.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Stop background scroll

    if (window.feather) {
        window.feather.replace();
    }
}

function closePlantDrawer() {
    plantDrawer.classList.add('hidden');
    document.body.style.overflow = ''; // Re-enable background scrolling
    STATE.selectedPlant = null;
}

// Accordion Toggle
function toggleAccordion(btn) {
    const item = btn.closest('.accordion-item');
    const isActive = item.classList.contains('active');
    
    // Close all others
    document.querySelectorAll('.drawer-accordion .accordion-item').forEach(i => {
        i.classList.remove('active');
        const iBtn = i.querySelector('.accordion-header');
        if (iBtn) iBtn.setAttribute('aria-expanded', 'false');
    });
    
    // If it wasn't active, open it
    if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
    }
}
