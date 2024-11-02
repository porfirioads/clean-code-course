(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    getProduct(id: number) {
      console.log(`ProductService.getProduct id=${id}`);
    }

    saveProduct(product: Product) {
      console.log(
        `ProductService.saveProduct product=${JSON.stringify(product)}`,
      );
    }
  }

  class Mailer {
    sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
      console.log(
        `Mailer.sendEmail emailList=${JSON.stringify(
          emailList,
        )} template=${template}`,
      );
    }
  }

  class ProductBloc {
    private productService: ProductService;
    private mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(['porfirioads@gmail.com'], 'to-clients');
    }
  }

  class CartBloc {
    addToCart(productId: number) {
      console.log(`CartBloc.addToCart productId=${productId}`);
    }
  }

  const productService: ProductService = new ProductService();
  const mailer: Mailer = new Mailer();
  const productBlock: ProductBloc = new ProductBloc(productService, mailer);
  const cartBlock: CartBloc = new CartBloc();

  productBlock.loadProduct(1);
  productBlock.saveProduct({ id: 10, name: 'Oled TV' });
  cartBlock.addToCart(1);
})();
