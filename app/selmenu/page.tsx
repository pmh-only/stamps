import style from './style.module.scss'
import { type FC } from 'react'
import { TitleBar } from '../../components/TitleBar'
import Image from 'next/image'
import { Button } from '../../components/Button'
import Link from 'next/link'

/* @ts-expect-error Async Server Component */
const UserInfoPage: FC = async () => {
  return (
    <main className={style.container}>
      <TitleBar>메인</TitleBar>

      <div className={style.content}>
        <Image src="/assets/characters/char5.svg" width={345} height={312} className={style.image} alt="안녕, 굿자비!" />

        <div>
          <h2>굿자비와 함께하고</h2>
          <p>상품 받아가세요!</p>
        </div>
      </div>

      <div className={style.buttonbar}>
        <Link href="/mystamps"><Button>스탬프 투어</Button></Link>
        <Link href="/quizs"><Button altColor>보물 찾기</Button></Link>
      </div>
        <Link className={style.help} href="/notice">
          도움말 보기
        </Link>
    </main>
  )
}

export default UserInfoPage
