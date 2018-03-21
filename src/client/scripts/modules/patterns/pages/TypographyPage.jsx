import React, {Component} from 'react';
import PatternsLayout from 'modules/patterns/layouts/PatternsLayout';

export default class TypographyPage extends Component {

    render() {
        return (
            <PatternsLayout>
                <header className="f-margin-bottom--8">
                    <h1>Typography.</h1>
                    <p>We follow a 6px baseline grid for achieving a vertical rhythm on all block-level elements. We utilise the Aptos corporate front, from Google, called Roboto.</p>
                </header>

                <h2 className="heading">Headings</h2>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
                <h6 className="heading">.heading</h6>

                <h2 className="heading f-margin-top--6">Body copy</h2>
                <p>Body text/copy</p>
                <p><strong>Body text/copy (bold)</strong></p>
                <p className="text-small">Small body text/copy</p>
                <p><a href="">Link in paragraph</a></p>
                <a href="">Link without paragraph</a>

                <h2 className="heading f-margin-top--6">Paragraphs</h2>
                <h3 className="h6">Standard body copy</h3>
                <p>Sed faucibus luctus metus vitae commodo. Donec egestas sagittis sem, et dignissim nulla rhoncus ac. Mauris vel ipsum nisl. Vestibulum posuere posuere mi quis imperdiet. Proin dapibus rutrum quam. Nulla a accumsan magna. Etiam nunc elit, pretium sed nibh vitae, vehicula hendrerit nulla. Aliquam congue eu tortor eu malesuada.</p>
                <h3 className="h6">Small body copy</h3>
                <p className="f-text-small">Aliquam sed consequat elit. Pellentesque maximus sollicitudin efficitur. Vivamus venenatis, nulla eu posuere tincidunt, orci justo placerat leo, non aliquet justo tortor et urna. Quisque nec nisi ac nisi sodales efficitur. Vivamus lobortis tristique tellus, quis convallis neque ultricies vitae. Fusce non lacus mollis, sodales leo sagittis, aliquam odio. Nullam luctus nisl nisi, et vestibulum turpis suscipit vel.</p>
            </PatternsLayout>
        );
    }
}
