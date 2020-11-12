import React, {useRef} from "react";
import "./Subject2.css";
import udio1 from './assets/PollinationTitle.mp3'
import udio2 from './assets/PollinationS.mp3'

function Subject2() {
  const subject2_title =  useRef(null)
  const subject2_topic =  useRef(null)
  const audio1 = new Audio(udio1);
  const audio2 = new Audio(udio2);
   const speak1 = () => {
    audio1.play();
  }
  const dontspeak1 = () => {
    audio1.pause();
  }
  const speak2 = () => {
    audio2.play();
  }
  const dontspeak2 = () => {
    audio2.pause();
  }
  return (
    <div className="subject2">
      <div className="subject2_title" ref={subject2_title} onMouseEnter={() => speak1()} onMouseLeave={() => dontspeak1()}>Pollination:</div>
      <div className="subject2_topic" ref={subject2_topic} onMouseEnter={() => speak2()} onMouseLeave={() => dontspeak2()}>
        Pollination is the transfer of pollen from a male part of a plant to a
        female part of a plant, later enabling fertilisation and the production
        of seeds, most often by an animal or by wind. Pollinating agents are
        animals such as insects, birds, and bats; water; wind; and even plants
        themselves, when self-pollination occurs within a closed flower.
        Pollination often occurs within a species. When pollination occurs
        between species it can produce hybrid offspring in nature and in plant
        breeding work. In angiosperms, after the pollen grain (gametophyte) has
        landed on the stigma, it germinates and develops a pollen tube which
        grows down the style until it reaches an ovary. Its two gametes travel
        down the tube to where the gametophyte(s) containing the female gametes
        are held within the carpel. After entering an ovum cell through the
        micropyle, one male nucleus fuses with the polar bodies to produce the
        endosperm tissues, while the other fuses with the ovule to produce the
        embryo. Hence the term: "double fertilization". This process would
        result in the production of a seed made of both nutritious tissues and
        embryo. In gymnosperms, the ovule is not contained in a carpel, but
        exposed on the surface of a dedicated support organ, such as the scale
        of a cone, so that the penetration of carpel tissue is unnecessary.
        Details of the process vary according to the division of gymnosperms in
        question. Two main modes of fertilization are found in gymnosperms.
        Cycads and Ginkgo have motile sperm that swim directly to the egg inside
        the ovule, whereas conifers and gnetophytes have sperm that are unable
        to swim but are conveyed to the egg along a pollen tube. The study of
        pollination spans many disciplines, such as botany, horticulture,
        entomology, and ecology. The pollination process as an interaction
        between flower and pollen vector was first addressed in the 18th century
        by Christian Konrad Sprengel. It is important in horticulture and
        agriculture, because fruiting is dependent on fertilization: the result
        of pollination. The study of pollination by insects is known as
        anthecology. There are also studies in economics that look at the
        positive and negative benefits of pollination, focused on bees, and how
        the process affects the pollinators themselves. Pollen germination has
        three stages; hydration, activation and pollen tube emergence. The
        pollen grain is severely dehydrated so that its mass is reduced enabling
        it to be more easily transported from flower to flower. Germination only
        takes place after rehydration, ensuring that premature germination does
        not take place in the anther. Hydration allows the plasma membrane of
        the pollen grain to reform into its normal bilayer organization
        providing an effective osmotic membrane. Activation involves the
        development of actin filaments throughout the cytoplasm of the cell,
        which eventually become concentrated at the point from which the pollen
        tube will emerge. Hydration and activation continue as the pollen tube
        begins to grow. In conifers, the reproductive structures are borne on
        cones. The cones are either pollen cones (male) or ovulate cones
        (female), but some species are monoecious and others dioecious. A pollen
        cone contains hundreds of microsporangia carried on (or borne on)
        reproductive structures called sporophylls. Spore mother cells in the
        microsporangia divide by meiosis to form haploid microspores that
        develop further by two mitotic divisions into immature male gametophytes
        (pollen grains). The four resulting cells consist of a large tube cell
        that forms the pollen tube, a generative cell that will produce two
        sperm by mitosis, and two prothallial cells that degenerate. These cells
        comprise a very reduced microgametophyte, that is contained within the
        resistant wall of the pollen grain. The pollen grains are dispersed by
        the wind to the female, ovulate cone that is made up of many overlapping
        scales (sporophylls, and thus megasporophylls), each protecting two
        ovules, each of which consists of a megasporangium (the nucellus)
        wrapped in two layers of tissue, the integument and the cupule, that
        were derived from highly modified branches of ancestral gymnosperms.
        When a pollen grain lands close enough to the tip of an ovule, it is
        drawn in through the micropyle ( a pore in the integuments covering the
        tip of the ovule) often by means of a drop of liquid known as a
        pollination drop. The pollen enters a pollen chamber close to the
        nucellus, and there it may wait for a year before it germinates and
        forms a pollen tube that grows through the wall of the megasporangium
        (=nucellus) where fertilisation takes place. During this time, the
        megaspore mother cell divides by meiosis to form four haploid cells,
        three of which degenerate. The surviving one develops as a megaspore and
        divides repeatedly to form an immature female gametophyte (egg sac). Two
        or three archegonia containing an egg then develop inside the
        gametophyte. Meanwhile, in the spring of the second year two sperm cells
        are produced by mitosis of the body cell of the male gametophyte. The
        pollen tube elongates and pierces and grows through the megasporangium
        wall and delivers the sperm cells to the female gametophyte inside.
        Fertilisation takes place when the nucleus of one of the sperm cells
        enters the egg cell in the megagametophyte's archegonium.
      </div>
    </div>
  );
}

export default Subject2;
