interface ParticipantCardProps {
  name: string;
  profession: string;
  income: string;
  request: string;
  image?: string;
}

const ParticipantCard = ({
  name,
  profession,
  income,
  request,
}: ParticipantCardProps) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 min-w-[280px] flex-shrink-0 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 mb-4 flex items-center justify-center">
        <span className="text-primary font-semibold text-lg">
          {name.charAt(0)}
        </span>
      </div>

      <h3 className="font-semibold text-foreground mb-1">{name}</h3>
      <p className="text-muted-foreground text-sm mb-2">{profession}</p>
      <p className="text-primary font-medium text-sm mb-3">{income}</p>
      <p className="text-muted-foreground text-sm leading-relaxed">
        Запрос на воркшоп: {request}
      </p>
    </div>
  );
};

export default ParticipantCard;
