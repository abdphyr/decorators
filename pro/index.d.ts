export = mydec
namespace mydec {
  /**
 * Bu decorator do'kon a'zosi buyurtmagasiga
 * 5% li chegirma qo'shadigan decorator
 */
  export declare function MemberOrderDecorator (): ClassDecorator
  /**
 * Bu decorator yordamida do'kon a'zosining avvaldan berilgan 
 * buyurtmaga 14,5% li chegirma qo'shadigan decorator
 */
  export declare function MemberPreOrderDecorator (): ClassDecorator
  /**
 * Bu decorator  yordamida avvaldan berilgan buyurtmaga
 * 10% li chegirma qo'shadigan decorator
 */
  export declare function PreOrderDecorator (): ClassDecorator
}
export={}