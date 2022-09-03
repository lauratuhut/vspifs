function ResultScreen(props) {
  const items = [
    {
      id: 1,
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 2,
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 3,
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
      imageAlt:
        "Person using a pen to cross a task off a itemivity paper card.",
    },
    {
      id: 4,
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 5,
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 6,
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 7,
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg",
      imageAlt:
        "Person using a pen to cross a task off a itemivity paper card.",
    },
    {
      id: 8,
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 9,
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 10,
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
  ];

  return (
    <>
      <nav className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-8 w-auto cursor-pointer"
                  src="https://victorysquarepartners.com/wp-content/uploads/2022/04/Favicon.svg"
                  alt="VSPifs"
                  onClick={() => props.onChangeScreen("Home")}
                />
              </div>
              <div
                className="text-center text-3xl font-bold tracking-tight text-gray-900 pl-2 cursor-pointer"
                onClick={() => props.onChangeScreen("Home")}
              >
                VSPifs
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        giphys
      </div> */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {items.map((item) => (
              <a key={item.id} href={item.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultScreen;
