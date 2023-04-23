import Title from './Title';
import Nft from './Nft';
import Options from './Options';
import Button from './Button';

export default function MainModify({ metadata, buttonLabel }) {

    return (
        <div>
            <Title metadata={metadata} />
            <Nft />
            <Options metadata={metadata} />
            <Button buttonLabel={buttonLabel} />
        </div>
    );

}