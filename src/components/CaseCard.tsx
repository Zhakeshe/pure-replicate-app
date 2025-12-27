interface CaseCardProps {
  name: string;
  profession: string;
  instagram: string;
  problem: string;
  pointA: string[];
  pointB: string[];
  imageBefore?: string;
  imageAfter?: string;
}

const CaseCard = ({
  name,
  profession,
  instagram,
  problem,
  pointA,
  pointB,
}: CaseCardProps) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 min-w-[320px] md:min-w-[400px] flex-shrink-0">
      <div className="mb-4">
        <h3 className="font-display font-semibold text-lg text-foreground">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm">{profession}</p>
        <p className="text-primary text-sm">{instagram}</p>
      </div>

      <div className="bg-primary/10 rounded-xl p-4 mb-4">
        <p className="text-primary font-medium text-sm">{problem}</p>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-foreground mb-2 text-sm">
            Точка А:
          </h4>
          <ul className="space-y-1">
            {pointA.map((item, idx) => (
              <li key={idx} className="text-muted-foreground text-sm">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-2 text-sm">
            Точка Б:
          </h4>
          <ul className="space-y-1">
            {pointB.map((item, idx) => (
              <li key={idx} className="text-muted-foreground text-sm">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
