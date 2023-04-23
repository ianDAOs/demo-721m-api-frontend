import Title from './Title';
import Nft from './Nft';
import Options from './Options';
import Button from './Button';

export default function MainChange({ metadata }) {

    return (
        <div>
            <Title metadata={metadata} />
            <Nft />
            <Options metadata={metadata} />
            <Button />
        </div>
    );

}