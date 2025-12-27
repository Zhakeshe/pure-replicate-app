import { Button } from "@/components/ui/button";

const PartnershipSection = () => {
  return (
    <section className="py-20 px-6 lg:px-16 bg-background">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
        Партнёрство и участие по бартеру
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
          <h3 className="font-display text-xl font-semibold text-foreground mb-4">
            Блогерам от 100 000 подписчиков
          </h3>
          <p className="text-muted-foreground mb-6">
            Готовы рассказать про воркшоп в своих соцсетях?
            <br />
            Предложим участие по спецусловиям.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
            Стать медиа-партнёром
          </Button>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
          <h3 className="font-display text-xl font-semibold text-foreground mb-4">
            Брендам и партнёрам
          </h3>
          <p className="text-muted-foreground mb-6">
            Хотите заявить о себе перед активной бизнес-аудиторией?
            <br />
            Открыты к интеграциям и спонсорству.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
            Стать медиа-партнёром
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
