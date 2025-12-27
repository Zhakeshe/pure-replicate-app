const Footer = () => {
  return (
    <footer className="py-12 px-6 lg:px-16 bg-muted border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-display text-xl font-bold text-primary mb-4">
              М2
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025
              <br />
              ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "М2"
              <br />
              Все права защищены
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Контакты</h4>
            <p className="text-sm text-muted-foreground">
              117218, РОССИЯ, Г.МОСКВА,
              <br />
              ВН.ТЕР.Г. МУНИЦИПАЛЬНЫЙ ОКРУГ АКАДЕМИЧЕСКИЙ,
              <br />
              УЛ КРЖИЖАНОВСКОГО, Д. 15, К. 5
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Реквизиты</h4>
            <p className="text-sm text-muted-foreground">
              ИНН: 9727075968
              <br />
              m2.gmbh.sk@gmail.com
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Документы</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Политика обработки ПД
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Согласие на обработку ПД
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Согласие на получение рассылки
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Связаться со службой заботы
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
