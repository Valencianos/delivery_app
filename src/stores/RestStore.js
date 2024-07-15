import { defineStore } from 'pinia'
// import { ref } from "vue";

export const useRestStore = defineStore('restStore', () => {
  const restaurants = [
    {
      id: 1,
      title: 'Пицца плюс',
      img: 'pizza_plus.png',
      rating: 4.5,
      bill: 900,
      time: 50,
      cousine: 'Пицца',
    },
    {
      id: 2,
      title: 'Тануки',
      img: 'tanuki.png',
      rating: 4.5,
      time: 50,
      bill: 900,
      cousine: 'Пицца',
      menu: [
        {
          id: 1,
          name: 'Ролл угорь стандарт',
          pic: 'goods_1.jpg',
          ingredients: 'Рис, угорь, соус унаги, кунжут, водоросли нори',
          price: 250
        },
        {
          id: 2,
          name: 'Калифорния лосось стандарт',
          pic: 'goods_2.jpg',
          ingredients: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори',
          price: 395
        },
        {
          id: 3,
          name: 'Окинава стандарт',
          pic: 'goods_3.jpg',
          ingredients: ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
          price: 250
        },
        {
          id: 4,
          name: 'Цезарь маки хl',
          pic: 'goods_4.jpg',
          ingredients: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
          price: 250
        },
        {
          id: 5,
          name: 'Ясай маки стандарт 185 г',
          pic: 'goods_5.jpg',
          ingredients: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
          price: 250
        },
        {
          id: 6,
          name: 'Ролл с креветкой стандарт',
          pic: 'goods_6.jpg',
          ingredients: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
          price: 250
        }
      ]
    },
    {
      id: 3,
      title: 'FoodBand',
      img: 'foodband.png',
      rating: 4.5,
      time: 50,
      bill: 900,
      cousine: 'Пицца',
      menu: [
        {
          id: 1,
          name: 'Ролл угорь стандарт',
          pic: 'goods_1.jpg',
          ingredients: 'Рис, угорь, соус унаги, кунжут, водоросли нори',
          price: 250
        },
        {
          id: 2,
          name: 'Калифорния лосось стандарт',
          pic: 'goods_2.jpg',
          ingredients: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори',
          price: 395
        },
        {
          id: 3,
          name: 'Окинава стандарт',
          pic: 'goods_3.jpg',
          ingredients: ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
          price: 250
        },
        {
          id: 4,
          name: 'Цезарь маки хl',
          pic: 'goods_4.jpg',
          ingredients: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
          price: 250
        },
        {
          id: 5,
          name: 'Ясай маки стандарт 185 г',
          pic: 'goods_5.jpg',
          ingredients: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
          price: 250
        },
        {
          id: 6,
          name: 'Ролл с креветкой стандарт',
          pic: 'goods_6.jpg',
          ingredients: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
          price: 250
        }
      ]
    },
    {
      id: 4,
      title: 'Жадина-пицца',
      img: 'zhadina.png',
      rating: 4.5,
      time: 50,
      bill: 900,
      cousine: 'Пицца',
      menu: [
        {
          id: 1,
          name: 'Ролл угорь стандарт',
          pic: 'goods_1.jpg',
          ingredients: 'Рис, угорь, соус унаги, кунжут, водоросли нори',
          price: 250
        },
        {
          id: 2,
          name: 'Калифорния лосось стандарт',
          pic: 'goods_2.jpg',
          ingredients: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори',
          price: 395
        },
        {
          id: 3,
          name: 'Окинава стандарт',
          pic: 'goods_3.jpg',
          ingredients: ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
          price: 250
        },
        {
          id: 4,
          name: 'Цезарь маки хl',
          pic: 'goods_4.jpg',
          ingredients: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
          price: 250
        },
        {
          id: 5,
          name: 'Ясай маки стандарт 185 г',
          pic: 'goods_5.jpg',
          ingredients: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
          price: 250
        },
        {
          id: 6,
          name: 'Ролл с креветкой стандарт',
          pic: 'goods_6.jpg',
          ingredients: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
          price: 250
        }
      ]
    },
    {
      id: 5,
      title: 'Точка еды',
      rating: 4.5,
      time: 50,
      img: 'tochka_edy.png',
      bill: 900,
      cousine: 'Пицца',
      menu: [
        {
          id: 1,
          name: 'Ролл угорь стандарт',
          pic: 'goods_1.jpg',
          ingredients: 'Рис, угорь, соус унаги, кунжут, водоросли нори',
          price: 250
        },
        {
          id: 2,
          name: 'Калифорния лосось стандарт',
          pic: 'goods_2.jpg',
          ingredients: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори',
          price: 395
        },
        {
          id: 3,
          name: 'Окинава стандарт',
          pic: 'goods_3.jpg',
          ingredients: ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
          price: 250
        },
        {
          id: 4,
          name: 'Цезарь маки хl',
          pic: 'goods_4.jpg',
          ingredients: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
          price: 250
        },
        {
          id: 5,
          name: 'Ясай маки стандарт 185 г',
          pic: 'goods_5.jpg',
          ingredients: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
          price: 250
        },
        {
          id: 6,
          name: 'Ролл с креветкой стандарт',
          pic: 'goods_6.jpg',
          ingredients: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
          price: 250
        }
      ]
    },
    {
      id: 6,
      title: 'PizzaBurger',
      img: 'pizza_burger.png',
      rating: 4.5,
      time: 50,
      bill: 900,
      cousine: 'Пицца',
      menu: [
        {
          id: 1,
          name: 'Ролл угорь стандарт',
          pic: 'goods_1.jpg',
          ingredients: 'Рис, угорь, соус унаги, кунжут, водоросли нори',
          price: 250
        },
        {
          id: 2,
          name: 'Калифорния лосось стандарт',
          pic: 'goods_2.jpg',
          ingredients: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори',
          price: 395
        },
        {
          id: 3,
          name: 'Окинава стандарт',
          pic: 'goods_3.jpg',
          ingredients: ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
          price: 250
        },
        {
          id: 4,
          name: 'Цезарь маки хl',
          pic: 'goods_4.jpg',
          ingredients: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
          price: 250
        },
        {
          id: 5,
          name: 'Ясай маки стандарт 185 г',
          pic: 'goods_5.jpg',
          ingredients: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
          price: 250
        },
        {
          id: 6,
          name: 'Ролл с креветкой стандарт',
          pic: 'goods_6.jpg',
          ingredients: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
          price: 250
        }
      ]
    }
  ]

  const menu = [
    {
      id: 1,
      name: 'Ролл угорь стандарт',
      pic: 'goods_1.jpg',
      ingredients: 'Рис, угорь, соус унаги, кунжут, водоросли нори',
      price: 250
    },
    {
      id: 2,
      name: 'Калифорния лосось стандарт',
      pic: 'goods_2.jpg',
      ingredients: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори',
      price: 395
    },
    {
      id: 3,
      name: 'Окинава стандарт',
      pic: 'goods_3.jpg',
      ingredients: ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
      price: 250
    },
    {
      id: 4,
      name: 'Цезарь маки хl',
      pic: 'goods_4.jpg',
      ingredients: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
      price: 250
    },
    {
      id: 5,
      name: 'Ясай маки стандарт 185 г',
      pic: 'goods_5.jpg',
      ingredients: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
      price: 250
    },
    {
      id: 6,
      name: 'Ролл с креветкой стандарт',
      pic: 'goods_6.jpg',
      ingredients: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
      price: 250
    }
  ]

  const iconUrls = [
    {
      shopCartUrl: 'shopping_cart.svg',
      loginUrl: 'login.svg'
    }
  ]

  return {
    restaurants,
    iconUrls,
    menu,
  }
})
