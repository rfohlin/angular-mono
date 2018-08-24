import { storiesOf } from '@storybook/angular'
import { ButtonModule, ListModule } from '../../packages/ui/src/public_api'
// import examples
import { ButtonComponent as ButtonExample } from './examples/button/button.component'
import { ListComponent as ListExample } from './examples/list/list.component'

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
  .add('Our list', () => ({
    component: ListExample,
    moduleMetadata: {
      imports: [
        ListModule,
      ]
    }
  }))
