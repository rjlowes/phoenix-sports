import Name from 'lib/form/fieldsets/Name';
import Telephone from 'lib/form/fieldsets/Telephone';
import Address from 'lib/form/fieldsets/Address';


const AddressForm = (props) => {
    return (
        <form>
            <Name />
            <Telephone />
            <Address />
        </form>
    );
};

export default AddressForm;
