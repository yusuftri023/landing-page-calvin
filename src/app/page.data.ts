type HomeData = {
  hero_section: {
    h1: string;
    p: string;
    button: string;
  };
  mission_section: {
    title: string;
    h2: string;
    p1: string;
    p2: string;
  };
  product_section: {
    title: string;
    h2: string;
    cat: {
      title: string;
      paragraph: string;
    };
    dog: {
      title: string;
      paragraph: string;
    };
    other: {
      title: string;
      paragraph: string;
    };
  };
  award_section: {
    title: string;
    licenses: {
      title: string;
      contents: string[];
    }[];
  };
  product_list_section: {
    title: string;
    h2: string;
  };
  testimony_section: {
    title: string;
    h2: string;
  };
  article_section: {
    title: string;
    h2: string;
  };
};
type HomeLanguageData = Record<language, HomeData>;
const homePageLanguageData: HomeLanguageData = {
  en: {
    hero_section: {
      h1: "The Best Nutritional Solution for Your Pet",
      p: "As a trusted distributor, Protema is committed to providing high-quality animal food and supplement products, with fast, safe and reliable service to meet the needs of customers throughout Indonesia.",
      button: "Discover",
    },
    mission_section: {
      title: "OUR MISSION",
      h2: `Taking Good Care of Your Pets to Be Healthy and Happy`,
      p1: `At Protema, we are committed to providing high-quality food and supplement products designed to support your pet's health and well-being. We believe that every pet deserves the best nutrition for a long, healthy life. Through innovation in digital and online distribution, we bring superior products directly to your hands, quickly and easily.`,
      p2: `We not only focus on quality products, but also provide an easy and safe shopping experience. Through our digital platform, customers can quickly access information, place orders, and receive timely deliveries. We also strive to educate the public about proper pet care.`,
    },
    product_section: {
      title: "PRODUCT CATEGORY",
      h2: "The Best Choice for Your Pet",
      cat: {
        title: "Cat Health",
        paragraph:
          "Explore our range of health products tailored specifically for your feline friends.",
      },
      dog: {
        title: "Dog Health",
        paragraph:
          "Wide range of health products designed to keep your dog active, happy, and healthy.",
      },
      other: {
        title: "Other Product",
        paragraph:
          "Variety of products designed to improve your pet’s overall quality of life.",
      },
    },
    award_section: {
      title: "ACHIEVEMENTS & LICENSES",
      licenses: [
        {
          title: "Protema Performance Track & Recognition",
          contents: [
            "Best Pet Supply Distributor 2024",
            "Top Digital Marketing in Pet Industry 2023",
            "Trusted Pet Nutrition Supplier 2022",
            "Best Online Pet Store Partner 2021",
          ],
        },
        {
          title: "Legality & Official Permits We Have",
          contents: [
            "Best Pet Supply Distributor 2024",
            "Top Digital Marketing in Pet Industry 2023",
            "Best Online Pet Store Partner 2021",
          ],
        },
      ],
    },
    product_list_section: {
      title: "PRODUCT AVAILABILITY",
      h2: "Find Protema On The Marketplace",
    },
    testimony_section: {
      title: "CUSTOMERS TESTIMONIALS",
      h2: "What Our Customers Say About Protema",
    },
    article_section: {
      title: "OUR BLOG",
      h2: "Latest Articles and Tips for Your Pet",
    },
  },
  id: {
    hero_section: {
      h1: "The Best Nutritional Solution for Your Pet",
      p: "As a trusted distributor, Protema is committed to providing high-quality animal food and supplement products, with fast, safe and reliable service to meet the needs of customers throughout Indonesia.",
      button: "Discover",
    },
    mission_section: {
      title: "OUR MISSION",
      h2: `Taking Good Care of Your Pets to Be Healthy and Happy`,
      p1: `At Protema, we are committed to providing high-quality food and supplement products designed to support your pet's health and well-being. We believe that every pet deserves the best nutrition for a long, healthy life. Through innovation in digital and online distribution, we bring superior products directly to your hands, quickly and easily.`,
      p2: `We not only focus on quality products, but also provide an easy and safe shopping experience. Through our digital platform, customers can quickly access information, place orders, and receive timely deliveries. We also strive to educate the public about proper pet care.`,
    },
    product_section: {
      title: "PRODUCT CATEGORY",
      h2: "The Best Choice for Your Pet",
      cat: {
        title: "Cat Health",
        paragraph:
          "Explore our range of health products tailored specifically for your feline friends.",
      },
      dog: {
        title: "Dog Health",
        paragraph:
          "Wide range of health products designed to keep your dog active, happy, and healthy.",
      },

      other: {
        title: "Other Product",
        paragraph:
          "Variety of products designed to improve your pet’s overall quality of life.",
      },
    },
    award_section: {
      title: "ACHIEVEMENTS & LICENSES",
      licenses: [
        {
          title: "Protema Performance Track & Recognition",
          contents: [
            "Best Pet Supply Distributor 2024",
            "Top Digital Marketing in Pet Industry 2023",
            "Trusted Pet Nutrition Supplier 2022",
            "Best Online Pet Store Partner 2021",
          ],
        },
        {
          title: "Legality & Official Permits We Have",
          contents: [
            "Best Pet Supply Distributor 2024",
            "Top Digital Marketing in Pet Industry 2023",
            "Best Online Pet Store Partner 2021",
          ],
        },
      ],
    },
    product_list_section: {
      title: "PRODUCT AVAILABILITY",
      h2: "Find Protema On The Marketplace",
    },
    testimony_section: {
      title: "CUSTOMERS TESTIMONIALS",
      h2: "What Our Customers Say About Protema",
    },
    article_section: {
      title: "OUR BLOG",
      h2: "Latest Articles and Tips for Your Pet",
    },
  },
};
