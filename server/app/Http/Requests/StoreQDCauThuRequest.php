<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class StoreQDCauThuRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'idMG' => 'required|interger',
            'TuoiToiThieu' => 'required|integer|between:15,20',
            'TuoiToiDa' => 'required|integer|between:20,55',
            'SLToiThieu' => 'required|integer|between:0,32',
            'SLToiDa' => 'required|integer|between:0,32',
            'SLNuocNgoai' => 'required|integer|between:0,10',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'status' => false,
            'message' => 'Lỗi thêm dữ liệu',
            'detail' => $validator->errors()->first()
        ]));
    }

    public function messages()
    {
        return [
            'idMG.required' => 'Mùa giải không được bỏ trống!',
            'TuoiToiThieu.required' => 'Tuổi tối thiểu cầu thủ không được bỏ trống!',
            'TuoiToiThieu.integer' => 'Tuổi tối thiểu cầu thủ không hợp lệ!',
            'TuoiToiThieu.between' => 'Tuổi tối thiểu cầu thủ phải nằm trong khoảng 15 và 20',
            
            'TuoiToiDa.required' => 'Tuổi tối đa cầu thủ không được bỏ trống!',
            'TuoiToiDa.integer' => 'Tuổi tối đa cầu thủ không hợp lệ!',
            'TuoiToiDa.between' => 'Tuổi tối đa cầu thủ phải nằm trong khoảng 20 đến 55!',
            
            'SLToiThieu.required' => 'Số lượng đội bóng tối thiểu không được bỏ trống!',
            'SLToiThieu.integer' => 'Số lượng đội bóng tối thiểu không hợp lệ!',
            'SLToiThieu.between' => 'Số lượng đội bóng tối thiểu phải nằm trong khoảng 0 và 32!',
            
            'SLToiDa.required' => 'Số lượng đội bóng tối đa không được bỏ trống!',
            'SLToiDa.integer'=> 'Số lượng đội bóng tối đa không hợp lệ!',
            'SLToiDa.between' => 'Số lượng độ bóng tối đa phải nằm trong khoảng 0 và 32!',

            'SLNuocNgoai.required' => 'Số lượng ngoại binh không được bỏ trống!',
            'SLNuocNgoai.integer' => 'Số lượng ngoại binh không hợp lệ!',
            'SLNuocNgoai.between' => 'Số lượng ngoại binh phải nằm trong khoảng 0 và 10'
        ];
    }
}