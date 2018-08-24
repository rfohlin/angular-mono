import { storiesOf } from '@storybook/angular'
import { ButtonModule } from '../../packages/ui/src/public_api'
// import examples
import { ButtonComponent as ButtonExample } from './examples/button/button.component'
import { ButtonComponent } from '../../packages/ui/src/lib/button/button.component'

storiesOf('Our application', module)
  .add('A template', () => ({
    template: `<p>Test</p>`
  }))
  .add('Use a button from our lib', () => ({
    component: ButtonExample,
    moduleMetadata: {
      imports: [
        ButtonModule,
      ],
      declarations: []
    }
  }))
