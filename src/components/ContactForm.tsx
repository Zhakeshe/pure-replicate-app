import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const ContactForm = () => {
  const [agreed, setAgreed] = useState(false);
  const [agreedMarketing, setAgreedMarketing] = useState(false);

  return (
    <section id="tarif" className="py-20 px-6 lg:px-16 bg-background">
      <div className="max-w-xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
          Заполните форму —
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          и получите актуальные цены от команды Петра
        </p>

        <form className="space-y-6">
          <div>
            <Input
              placeholder="Имя"
              className="bg-muted border-border rounded-xl h-12"
            />
          </div>

          <div className="flex gap-2">
            <Select defaultValue="+7">
              <SelectTrigger className="w-24 bg-muted border-border rounded-xl h-12">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+7">🇷🇺 +7</SelectItem>
                <SelectItem value="+1">🇺🇸 +1</SelectItem>
                <SelectItem value="+44">🇬🇧 +44</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Телефон"
              className="flex-1 bg-muted border-border rounded-xl h-12"
            />
          </div>

          <div>
            <Select>
              <SelectTrigger className="w-full bg-muted border-border rounded-xl h-12">
                <SelectValue placeholder="Условия участия" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="smart">SMART — 2 дня</SelectItem>
                <SelectItem value="premium">PREMIUM — 3 дня</SelectItem>
                <SelectItem value="ultra">ULTRA — 3 дня VIP</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select>
              <SelectTrigger className="w-full bg-muted border-border rounded-xl h-12">
                <SelectValue placeholder="Доход" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-100">0-100 000 руб</SelectItem>
                <SelectItem value="100-300">100 000 руб - 300 000 руб</SelectItem>
                <SelectItem value="300-500">300 000 руб - 500 000 руб</SelectItem>
                <SelectItem value="500-1000">
                  500 000 руб - 1 000 000 руб
                </SelectItem>
                <SelectItem value="1000+">Больше 1 000 000 руб</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id="privacy"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
              className="mt-1"
            />
            <label htmlFor="privacy" className="text-sm text-muted-foreground">
              Я даю{" "}
              <a href="#" className="text-primary underline">
                согласие
              </a>{" "}
              на обработку персональных данных в соответствии с{" "}
              <a href="#" className="text-primary underline">
                политикой
              </a>
            </label>
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id="marketing"
              checked={agreedMarketing}
              onCheckedChange={(checked) =>
                setAgreedMarketing(checked as boolean)
              }
              className="mt-1"
            />
            <label
              htmlFor="marketing"
              className="text-sm text-muted-foreground"
            >
              Я даю{" "}
              <a href="#" className="text-primary underline">
                согласие на получение рекламной рассылки
              </a>
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12 font-medium"
            disabled={!agreed}
          >
            Отправить заявку
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
