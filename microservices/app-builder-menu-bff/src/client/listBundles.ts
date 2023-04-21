import axios from 'axios';
import { Request } from 'express';
import { IBundle, IBundleWidget } from './response/IBundleWidget';
import { getRequestConfig } from './requestConfig';

export const listBundles = async (req: Request): Promise<IBundle[]> => {
  const url = `${process.env.ENTANDO_ECR_INGRESS_URL}/bundles`;
  try {
    const res = await axios.get(url, getRequestConfig(req));
    return res.data.payload;
  } catch (ex) {
    throw new Error(`Error while calling ${url}: ${(ex as Error).message}`);
  }
};

export const listBundlesWidgets = async (req: Request): Promise<IBundleWidget[]> => {
  const url = `${process.env.ENTANDO_ECR_INGRESS_URL}/bundles/all/widgets?filters%5B0%5D.value=app-builder&filters%5B0%5D.attribute=widgetType&filters%5B0%5D.operator=eq`;
  try {
    const res = await axios.get(url, getRequestConfig(req));
    return res.data.payload;
  } catch (ex) {
    throw new Error(`Error while calling ${url}: ${(ex as Error).message}`);
  }
};
