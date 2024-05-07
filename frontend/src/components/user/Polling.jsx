import CandidateCard from "./CandidateCard";

const Polling = (props) => {
  const { candidates } = props;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
      {candidates?.map((candidate, i) => {
        // console.log(candidate);
        return (
          <CandidateCard
            key={i}
            address={candidate[0]}
            name={candidate[1]}
            party={candidate[2]}
          />
        );
      })}
    </div>
  );
};

export default Polling;
