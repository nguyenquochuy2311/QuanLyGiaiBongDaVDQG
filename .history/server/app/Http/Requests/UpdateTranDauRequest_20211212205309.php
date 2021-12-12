<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\Rule;

class UpdateTranDauRequest extends FormRequest
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
            'VongDau' => 'required|max:11',
            'Doi1' => 'required|max:10',
            'Doi2' => 'required|max:10',
            'SanDau' => 'required|max:255',
            'ThoiGian' => 'required',
            // 'idMG' => 'required|max:10',
            'idToTT' => 'required|max:10',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'status' => false,
            'message' => 'Lỗi cập nhật dữ liệu',
            'detail' => $validator->errors()
        ]));
    }

    public function messages()
    {
        return [
            'VongDau.required' => 'Vòng đấu không được bỏ trống!',
            'SanDau.required' => 'Sân đấu không được bỏ trống!',
            'ThoiGian.required' => 'Thời gian không được bỏ trống!',
            'Doi1.required' => 'ID đội 1 không được bỏ trống!',
            'Doi2.required' => 'ID đội 2 không được bỏ trống!',
            'idMG.required' => 'ID mùa giải không được bỏ trống!',
            'idToTT.required' => 'ID tổ trọng tài không được bỏ trống!',
        ];
    }
}
