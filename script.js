/**
 * GreenMeans: Native Plant Suggester - Core Standalone Script
 * Focused entirely on UK Native Species to support British Pollinators and Wildlife
 */

// Plant suggestion dataset mapped to region and sunlight keys
const PLANTS_DATASET = {
    "south_full_sun": [
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
    currentPlants: []
};

// DOM References
const regionSelect = document.getElementById('region');
const sunlightRadios = document.getElementsByName('sunlight');
const searchQueryInput = document.getElementById('searchQuery');
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

const SUNLIGHT_PREFS = {
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
    "Scottish Harebell": ['full_sun', 'part_sun']
};

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
    
    // Filter realistically by sunlight requirements
    plants = plants.filter(plant => {
        let prefs = SUNLIGHT_PREFS[plant.name] || ['full_sun', 'part_sun', 'part_shade', 'full_shade', 'dappled'];
        return prefs.includes(STATE.sunlight);
    });

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

        return `
            <article class="plant-card animate-fade-in" style="animation-delay: ${idx * 0.05}s;" onclick="openPlantDetail(${idx})" role="button" tabindex="0" aria-label="View details for ${plant.name}" onkeydown="if(event.key==='Enter'||event.key===' ') { event.preventDefault(); openPlantDetail(${idx}); }">
                <div class="card-top">
                    <div class="card-badge-row">
                        <span class="badge ${categoryClass}">${plant.category}</span>
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
    "vipers bugloss": {
        status: "Moderately Toxic",
        colorClass: "bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
        text: "Contains toxic pyrrolizidine alkaloids (primarily heliosupine and echimidine). Chronic ingestion in humans causes localised liver damage, specifically veno-occlusive disease. Direct physical handling of its stiff, bristly hairs can cause severe skin irritation and contact dermatitis. Highly toxic to grazing animals, horses, and livestock upon pasture grazing, producing cumulative, irreversible liver necrosis."
    },
    "hemp agrimony": {
        status: "Moderately Toxic",
        colorClass: "bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
        text: "Contains toxic pyrrolizidine alkaloids (such as supinine). Ingestion by humans, dogs, cats, or livestock causes stomach discomfort, nausea, and cumulative liver irritation (hepatotoxic injury). Safe to handle and touch, but raw foliage or stems should never be consumed."
    },
    "blackthorn": {
        status: "Moderately Toxic (Cyanogenic)",
        colorClass: "bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
        text: "The flesh of sloe berries is non-toxic and edible. However, raw stones, leaves, and bark contain cyanogenic glycosides that release highly toxic hydrogen cyanide when crushed and ingested. Rigid thorns present a physical puncture wound hazard, easily introducing deep-seated bacterial or fungal infections."
    },
    "red campion": {
        status: "Non-Toxic / Fully Safe",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Completely non-toxic to humans, dogs, cats, and pasture animals. Contains mild saponins that are harmless to mammals under all practical conditions. Safe to handle and grow in schools or public spaces."
    },
    "primrose": {
        status: "Non-Toxic / Low Irritant",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Entirely non-toxic to humans and animals. Flowers are edible. Handling can occasionally spark very minor contact dermatitis in individuals sensitive to Primula species. Raw ingestion by cats or dogs is non-poisonous, but can cause mild, temporary stomach irritation."
    },
    "bluebell": {
        status: "Highly Toxic",
        colorClass: "bg-red-100 text-red-800 border border-red-300 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800",
        text: "All parts, especially the bulbs, contain dangerous cardiac glycosides (scillarens). Highly toxic if ingested. Causes severe stomach pain, persistent vomiting, diarrhoea, slow heart rate, and hypocalcemia in humans, dogs, cats, and grazing herds."
    },
    "foxglove": {
        status: "Extremely Poisonous / Fatal",
        colorClass: "bg-red-100 text-red-800 border border-red-400 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800",
        text: "CRITICAL HAZARD. Every part of the foxglove contains extremely potent cardiac glycosides (including digoxin, digitoxin, and gitalin). Ingesting even small amounts is a severe medical emergency for humans, dogs, cats, horses, and livestock. Symptoms include severe nausea, vomiting, dangerous cardiac arrhythmias, muscle tremors, seizures, and fatal cardiac arrest. Always wash hands after handling or wear gloves. Keep strictly away from grazing livestock or curious domestic pets."
    },
    "common sorrel": {
        status: "Mildly Toxic (Oxalates)",
        colorClass: "bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
        text: "Edible for humans in culinary quantities, but highly concentrated in soluble calcium oxalates. Swallowing massive raw volumes causes severe kidney stone risks or calcium binding. Highly toxic to grazing animals, cattle, and sheep, leading to muscle weakness, tremors, and acute renal failure."
    },
    "field scabious": {
        status: "Non-Toxic / Fully Safe",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Completely non-toxic and hazard-free. Perfectly safe to handle, plant, or touch for humans, children, dogs, cats, horses, and wildlife."
    },
    "chicory": {
        status: "Non-Toxic / Edible",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Nutritious and edible. Roots are roasted as a coffee substitute and leaves are eaten as bitter greens. Wholly non-toxic and highly safe for dogs, cats, humans, and livestock."
    },
    "snowdrop": {
        status: "Moderately Toxic",
        colorClass: "bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
        text: "All parts, particularly the underground bulbs, contain toxic alkaloids (lycorine and galantamine). Ingestion leads to severe vomiting, abdominal pain, drooling, and diarrhoea in humans, dogs, and cats. Always store loose bulbs safely out of reach of pets."
    },
    "wild garlic": {
        status: "Safe for Humans / Toxic to Pets",
        colorClass: "bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
        text: "Thoroughly edible and delicious for human dishes. However, it is highly toxic to dogs, cats, and horses because it contains organic sulphur compounds (thiosulfates) which damage red blood cells, causing Heinz body haemolytic anaemia. Symptoms in pets include lethargy, pale gums, vomiting, rapid breathing, and dark urine. Keep away from pets."
    },
    "cowslip": {
        status: "Non-Toxic / Minimal Hazard",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Very safe and non-toxic. Beautiful spring flowers are edible. Simple contact with the fuzzy stems might occasionally cause superficial skin redness in highly sensitive people. Ingesting large portions might cause minor gastric irritation in pets due to saponins."
    },
    "bugle": {
        status: "Non-Toxic / Fully Safe",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Wholly non-toxic and safe. Free of toxic alkaloids or saponins. Harmless to humans, dogs, cats, and all grazing livestock."
    },
    "yarrow": {
        status: "Mildly Toxic to Pets",
        colorClass: "bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
        text: "Contains thujone and sesquiterpene lactones. Low human toxicity, though contact with foliage can trigger allergic dermatitis in sensitive gardeners. Highly toxic to dogs, cats, and horses, causing increased urination, vomiting, severe diarrhoea, and raw, irritated skin."
    },
    "wild marjoram": {
        status: "Safe for Humans / Mild Pet Irritant",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Safe and highly edible for humans as a culinary herb. However, eating raw wild marjoram in bulk or exposure to concentrated essential oil is toxic to dogs and cats, causing severe gastrointestinal irritation, vomiting, and diarrhoea."
    },
    "sea campion": {
        status: "Non-Toxic / Low Hazard",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Low toxicity and virtually hazard-free. Houses mild saponins which present zero systemic risk to humans or pets unless consumed in unrealistic mass quantities."
    },
    "lesser celandine": {
        status: "Moderately Toxic",
        colorClass: "bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
        text: "Contains ranunculin, which quickly produces highly irritating protoanemonin when the leaves or stems are bruised or chewed. Raw ingestion causes burning of the mouth, swelling of the tongue, and gastric pain in humans and grazing pets (dogs, cats, horses, sheep). Sap contact can cause raw, blistering dermatitis."
    },
    "wood anemone": {
        status: "Moderately Toxic",
        colorClass: "bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
        text: "Contains ranunculin, converting into blistering protoanemonin upon mechanical plant damage. Toxic raw. Ingestion causes severe oral burning, throat swelling, vomiting, and bloody diarrhoea. Direct sap contact causes severe skin blistering and dermatitis."
    },
    "ivy": {
        status: "Moderately Toxic",
        colorClass: "bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
        text: "Contains toxic triterpenoid saponins (hederacosides) and irritant polyacetylenes. Ingesting foliage or berries is toxic to humans and domestic animals, leading to heavy salivation, vomiting, intense stomach pain, and diarrhoea. Sap contact frequently causes blistering skin dermatitis."
    },
    "gorse": {
        status: "Mildly Toxic (Seeds Only)",
        colorClass: "bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
        text: "Seeds contain cytisine, a toxic quinolizidine alkaloid. Ingestion of seeds is toxic to humans, dogs, cats, and horses, leading to severe nausea, dizziness, and respiratory problems. The brilliant yellow flowers are edible in minor amounts. The extremely sharp wooden thorns present a physical puncture hazard."
    },
    "white dead nettle": {
        status: "Non-Toxic / Truly Safe",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Completely non-toxic, non-stinging, and highly edible. Stems, leaves, and nectar-rich flowers pose zero toxicity or mechanical hazards to humans, pets, or livestock."
    },
    "white deadnettle": {
        status: "Non-Toxic / Truly Safe",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Completely non-toxic, non-stinging, and highly edible. Stems, leaves, and nectar-rich flowers pose zero toxicity or mechanical hazards to humans, pets, or livestock."
    },
    "silverweed": {
        status: "Non-Toxic / Safe",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Totally non-toxic, rich in astringent tannins, and safe. Roots were historically roasted and eaten. Non-poisonous to dogs, cats, horses, or grazing animals."
    },
    "wild teasel": {
        status: "Non-Toxic / Safe",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Free of chemical toxins and highly beneficial for wintering seed-eating birds. Sharp prickly stems pose a physical mechanical scratching hazard, but the plant carries absolute zero chemical toxicity to humans or animals."
    },
    "dog rose": {
        status: "Non-Toxic / Safe",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Chemically safe and non-toxic. Ripe hips make highly nutritious syrup, but the small internal seed hairs are mechanical irritants and must be removed to avoid severe throat itching. Sharp thorns present a physical scratching hazard, but otherwise the plant is non-poisonous to pets."
    },
    "selfheal": {
        status: "Non-Toxic / Safe",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Entirely non-toxic, safe, and historically prominent in traditional wound healing. Certified safe for domestic pets, children, and farm stock."
    },
    "wild thyme": {
        status: "Safe for Humans / Mild Pet Irritant",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Edible culinary herb entirely safe for humans. Raw consumption in large amounts or ingestion of concentrated essential oils is toxic to dogs and cats, triggering gastric irritation, vomiting, and diarrhoea."
    },
    "yellow rattle": {
        status: "Moderately Toxic",
        colorClass: "bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
        text: "Contains toxic rhinanthin. Highly toxic to grazing horses and livestock; can cause sleepiness, diarrhoea, coordination loss, paralysis, or death if mixed extensively in winter hay. General handling is safe, but keep far from animal forage supplies."
    },
    "meadow cranesbill": {
        status: "Non-Toxic / Fully Safe",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Chemically safe. Contains astringent tannins but has zero poisonous or toxic qualities. Completely safe for dogs, cats, children, and farm herds."
    },
    "purple loosestrife": {
        status: "Non-Toxic / Safe",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Completely non-toxic. Possesses no toxic alkaloids or glycosides. Fully safe to prune, touching, and planting in areas frequented by domestic dogs, cats, or livestock."
    },
    "toadflax": {
        status: "Mildly Toxic",
        colorClass: "bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
        text: "Contains peganine and lanatosides. Toxic to cattle, sheep, and horses, though they usually avoid its bitter taste. Ingestion can cause gastrointestinal inflammation and respiratory issues. Safe/low toxicity to dogs and cats unless bulk quantities are eaten. Safe to handle with bare hands."
    },
    "sea holly": {
        status: "Non-Toxic / Safe",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Completely non-toxic. Roots are edible and historically candied. The sharp, spiny leaves act as a physical deterrent, but the plant holds absolutely zero chemical poisons for humans, dogs, or cats."
    },
    "hawthorn": {
        status: "Seeds contain Cyanogenic Glycosides",
        colorClass: "bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
        text: "Berries are edible, but the hard interior seeds contain cyanogenic glycosides and release hydrogen cyanide if crushed. Ingestion of many whole haws (with seeds) is moderately toxic to dogs, cats, and livestock, prompting digestive upset. Physical puncture from sharp thorns is also a scratch hazard."
    },
    "rosebay willowherb": {
        status: "Non-Toxic / Edible",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Completely edible, safe, and non-toxic to humans, dogs, cats, and livestock. Highly recommended for wildlife gardens with zero poisonous risks."
    },
    "ladys bedstraw": {
        status: "Non-Toxic / Safe",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Wholly non-toxic and hazard-free. Yellow flowers contain coumarins which smell sweet and repel fleas. Completely safe for pasture herds, domestic pets, and children."
    },
    "marsh marigold": {
        status: "Moderately Toxic",
        colorClass: "bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
        text: "Contains ranunculin, reverting to harsh, biting protoanemonin when crushed. Raw ingestion causes powerful mouth blistering, salivation, severe colic, and bloody diarrhoea in humans and pets. Sap contact easily blisters human skin. Prune using gloves."
    },
    "mallow": {
        status: "Non-Toxic / Safe",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Completely non-toxic and edible. Safe for human salads and entirely non-poisonous to dogs, cats, and wildlife. (In agricultural pastures with high artificial nitrates, it can store nitrates, but practically it is fully non-toxic to residential gardens)."
    },
    "common knapweed": {
        status: "Non-Toxic / Safe",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Perfectly non-toxic, safe, and hazard-free. Highly attractive to wild birds for seeds, with absolute zero toxic concerns for dogs, cats, horses, or kids."
    },
    "devils bit scabious": {
        status: "Non-Toxic / Safe",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Completely non-toxic and safe to grow. Free of all harmful alkaloids, posing no physical or chemical danger to pets, humans, or pasture animals."
    },
    "devilsbit scabious": {
        status: "Non-Toxic / Safe",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Completely non-toxic and safe to grow. Free of all harmful alkaloids, posing no physical or chemical danger to pets, humans, or pasture animals."
    },
    "water avens": {
        status: "Non-Toxic / Safe",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Completely non-toxic. Roots contain eugenol (scents of clove) and can be used in teas. Safe for dogs, cats, and pasture animals."
    },
    "oxeye daisy": {
        status: "Non-Toxic / Low Hazard",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Mild contact allergen for individuals sensitive to the Asteraceae (daisy) family, but chemically non-toxic. Ingestion of large quantities of rough foliage can cause self-limiting, mild digestive irritation in dogs or cats, but it is not poisonous."
    },
    "kidney vetch": {
        status: "Non-Toxic / Highly Beneficial",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Superbly safe and non-toxic. Extensively cultivated as high-nutrient forage for pasture sheep and cattle. Wholly non-poisonous to dogs, cats, and humans."
    },
    "birds foot trefoil": {
        status: "Safe for Pets / Trace Risk in Bulk",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Contains very minor cyanogenic glycosides. Safe for household dogs and cats. In standard grazing, it is an excellent wildflower forage, but in rare absolute monopoly grazing of pure pastures, it contains light trace cyanide risks for livestock herds."
    },
    "birdsfoot trefoil": {
        status: "Safe for Pets / Trace Risk in Bulk",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Contains very minor cyanogenic glycosides. Safe for household dogs and cats. In standard grazing, it is an excellent wildflower forage, but in rare absolute monopoly grazing of pure pastures, it contains light trace cyanide risks for livestock herds."
    },
    "rowan": {
        status: "Toxic Raw / Safe Cooked",
        colorClass: "bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
        text: "The raw orange-red berries contain bitter parasorbic acid, which causes severe stomach upset, vomiting, and diarrhoea in humans and pets (dogs, cats). Seeds contain cyanogenic glycosides and must not be consumed. Cooking rowan berries completely neutralises parasorbic acid, making rowan jelly safe and edible."
    },
    "cornflower": {
        status: "Non-Toxic / Edible",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Entirely safe, edible, and non-toxic. The bright blue petals are a popular edible garnish. Wholly non-poisonous to humans, dogs, cats, and grazing animals."
    },
    "ragged robin": {
        status: "Non-Toxic / Safe",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Extremely low human and pet toxicity. Contains negligible trace saponins that present zero clinical hazard in domestic gardens."
    },
    "meadow buttercup": {
        status: "Moderately Toxic",
        colorClass: "bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
        text: "Contains ranunculin, converting into burning protoanemonin when raw cells are damaged. Eating the raw plant causes painful mouth blistering, drooling, severe colic, and diarrhoea in humans, dogs, cats, and horses. Sap contact can blister skin. (Safely inert when dried in winter hay)."
    },
    "scottish harebell": {
        status: "Non-Toxic / Fully Safe",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "Fully non-toxic, safe, and delicate. Zero poisonous properties for humans, dogs, cats, or pasture animals."
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

    drawerBenefits.innerText = seedPlant.benefits;
    drawerTip.innerText = seedPlant.plantingTip;

    // Handle Toxicology and Safety profiling
    const normalizedName = (seedPlant.name || "").toLowerCase()
        .replace(/['’]/g, '')
        .replace(/[^a-z0-9]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    const toxRecord = CLINICAL_PLANT_TOXICOLOGY[normalizedName] || {
        status: "General Safety Profile",
        colorClass: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
        text: "This native species is generally classified as non-toxic and highly safe for standard domestic gardens. Standard gardening hygiene applies: wash hands after pruning or planting, and avoid deliberate raw ingestion."
    };

    const statusEl = document.getElementById('drawerToxicStatus');
    const descEl = document.getElementById('drawerToxicity');
    if (statusEl && descEl) {
        statusEl.innerText = toxRecord.status.toUpperCase();
        statusEl.className = `inline-block px-2.5 py-0.5 rounded-full font-semibold text-xs mb-3 ${toxRecord.colorClass}`;
        descEl.innerText = toxRecord.text;
    } else {
        console.error("Toxicology elements not found in drawer:", { statusEl: !!statusEl, descEl: !!descEl });
    }

    // reset all accordions to closed state when opening new plant
    document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
    });

    // Optionally default open the first accordion
    const firstAccordion = document.querySelector('.drawer-accordion .accordion-item');
    if (firstAccordion) firstAccordion.classList.add('active');

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
