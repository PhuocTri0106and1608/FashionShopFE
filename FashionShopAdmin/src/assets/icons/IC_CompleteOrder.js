import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"
import scale from "../../constants/responsive"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} width={scale(33)} height={scale(28)} >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M30.625 9.097 20 15m0 0L9.375 9.097M20 15v11.875m2.5-.764-1.529.85c-.354.197-.532.295-.72.334a1.252 1.252 0 0 1-.503 0c-.188-.039-.365-.137-.72-.334l-9.25-5.14c-.374-.207-.56-.311-.697-.46a1.25 1.25 0 0 1-.268-.454c-.063-.191-.063-.405-.063-.834V9.927c0-.428 0-.642.063-.833a1.25 1.25 0 0 1 .268-.455c.136-.148.323-.252.698-.46l9.25-5.14c.354-.196.532-.295.72-.333a1.25 1.25 0 0 1 .503 0c.188.038.365.137.72.334l9.25 5.139c.374.208.56.312.697.46.12.13.212.286.268.455.063.19.063.405.063.833v5.698m-16.875-10 11.25 6.25M25 22.5l2.5 2.5 5-5"
    />
    <Path
      fill="#000"
      d="M6.35 37.46c-.12.08-.283.17-.49.27-.207.1-.45.183-.73.25-.273.067-.573.1-.9.1a3.962 3.962 0 0 1-1.52-.3 3.392 3.392 0 0 1-1.14-.79 3.632 3.632 0 0 1-.73-1.15 3.919 3.919 0 0 1-.25-1.4c0-.54.087-1.037.26-1.49.18-.46.43-.857.75-1.19a3.36 3.36 0 0 1 1.13-.79c.44-.187.92-.28 1.44-.28.433 0 .827.06 1.18.18.353.113.657.25.91.41l-.39.9c-.2-.133-.443-.26-.73-.38-.28-.12-.593-.18-.94-.18-.353 0-.687.07-1 .21-.313.14-.59.337-.83.59-.24.253-.43.55-.57.89a2.88 2.88 0 0 0-.2 1.08c0 .393.06.76.18 1.1.127.333.303.623.53.87.233.247.513.44.84.58.327.14.693.21 1.1.21.367 0 .693-.057.98-.17.287-.113.523-.24.71-.38l.41.86Zm.873-1.57c0-.413.097-.787.29-1.12.2-.333.474-.597.82-.79.347-.193.74-.29 1.18-.29.454 0 .85.097 1.19.29.34.193.604.457.79.79.187.333.28.707.28 1.12 0 .413-.093.79-.28 1.13a2.027 2.027 0 0 1-.8.79c-.34.193-.736.29-1.19.29-.44 0-.833-.09-1.18-.27a2.14 2.14 0 0 1-.81-.77c-.193-.333-.29-.723-.29-1.17Zm.93.01c0 .267.06.51.18.73.12.213.28.383.48.51.207.127.434.19.68.19a1.309 1.309 0 0 0 1.17-.7c.114-.22.17-.463.17-.73a1.51 1.51 0 0 0-.17-.72 1.292 1.292 0 0 0-.48-.52c-.2-.133-.43-.2-.69-.2-.253 0-.483.067-.69.2-.2.133-.36.31-.48.53a1.49 1.49 0 0 0-.17.71Zm5.54-2.04.08.93-.04-.08a1.8 1.8 0 0 1 .65-.74c.286-.18.613-.27.98-.27.233 0 .44.037.62.11.18.073.326.18.44.32.12.133.196.3.23.5l-.05.03c.16-.3.38-.533.66-.7.286-.173.586-.26.9-.26.406 0 .726.117.96.35.24.227.363.523.37.89V38h-.93v-2.73a.942.942 0 0 0-.16-.53c-.094-.147-.26-.227-.5-.24-.24 0-.457.073-.65.22a1.507 1.507 0 0 0-.44.57 1.824 1.824 0 0 0-.17.74V38h-.93v-2.73a.898.898 0 0 0-.17-.53c-.1-.147-.27-.227-.51-.24-.247 0-.464.073-.65.22a1.507 1.507 0 0 0-.44.57c-.1.233-.15.483-.15.75V38h-.93v-4.14h.83Zm9.691 4.24c-.313 0-.616-.073-.91-.22a1.703 1.703 0 0 1-.67-.59l.06-.29v2.99h-.92V33.8h.8l.13 1.06-.1-.29c.2-.253.454-.463.76-.63.307-.167.65-.25 1.03-.25a1.986 1.986 0 0 1 1.78 1.06c.18.333.27.723.27 1.17 0 .447-.096.833-.29 1.16-.193.327-.46.58-.8.76-.333.173-.713.26-1.14.26Zm-.18-.74a1.47 1.47 0 0 0 1.27-.69 1.4 1.4 0 0 0 .2-.74c0-.28-.063-.527-.19-.74a1.413 1.413 0 0 0-.51-.52 1.312 1.312 0 0 0-.7-.19c-.24 0-.456.047-.65.14a1.307 1.307 0 0 0-.48.39c-.126.16-.216.347-.27.56v.69c.034.213.114.403.24.57a1.33 1.33 0 0 0 1.09.53Zm3.498-7.1h.93V38h-.93v-7.74Zm4.29 7.84c-.474 0-.88-.093-1.22-.28a2.065 2.065 0 0 1-.79-.78 2.36 2.36 0 0 1-.27-1.14c0-.407.103-.777.31-1.11.206-.333.483-.6.83-.8.346-.2.733-.3 1.16-.3.546 0 1 .16 1.36.48.36.32.603.76.73 1.32l-3.41 1.2-.22-.55 2.8-1.02-.2.13a1.35 1.35 0 0 0-.4-.57c-.187-.167-.43-.25-.73-.25-.254 0-.48.063-.68.19-.2.12-.357.287-.47.5-.114.213-.17.457-.17.73 0 .287.06.54.18.76.12.213.283.383.49.51.213.12.453.18.72.18.18 0 .353-.033.52-.1.173-.067.333-.153.48-.26l.43.69c-.207.14-.44.253-.7.34-.254.087-.504.13-.75.13Zm3.505-6.06h.93v1.84h1.14v.73h-1.14V38h-.93v-3.39h-.76v-.73h.76v-1.84Zm4.943 6.06c-.473 0-.88-.093-1.22-.28a2.065 2.065 0 0 1-.79-.78 2.36 2.36 0 0 1-.27-1.14c0-.407.104-.777.31-1.11.207-.333.484-.6.83-.8.347-.2.734-.3 1.16-.3.547 0 1 .16 1.36.48.36.32.604.76.73 1.32l-3.41 1.2-.22-.55 2.8-1.02-.2.13a1.35 1.35 0 0 0-.4-.57c-.186-.167-.43-.25-.73-.25-.253 0-.48.063-.68.19-.2.12-.356.287-.47.5-.113.213-.17.457-.17.73 0 .287.06.54.18.76.12.213.284.383.49.51.214.12.454.18.72.18.18 0 .354-.033.52-.1.174-.067.334-.153.48-.26l.43.69c-.206.14-.44.253-.7.34-.253.087-.503.13-.75.13Z"
    />
  </Svg>
)
const Memo = memo(SvgComponent)
export default Memo