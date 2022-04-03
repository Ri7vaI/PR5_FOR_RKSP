import { renderWithRedux } from 'E:/STUDY/6 SEM/RKSP/PR5/src/utils'
import LicenseAgreement from 'E:/STUDY/6 SEM/RKSP/PR5/src/components/LicenseAgreement'
import App from './App'

jest.mock('components/LicenseAgreement', () => () => null)

test('renders LicenseAgreement', () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const renderer = renderWithRedux(<App />)

  expect(() => renderer.root.findByType(LicenseAgreement)).not.toThrow()
})